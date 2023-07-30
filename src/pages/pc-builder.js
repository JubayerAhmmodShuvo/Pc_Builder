import { usePCBuilderContext } from "@/components/contexts/PCBuilderContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import SelectedComponentCard from "@/components/UI/SelectedComponentCard";
import { useRouter } from "next/router";
import Head from "next/head";
import CategorySection from "@/components/UI/CategorySection";

const PCBuilder = ({ initialData }) => {
  const router = useRouter();
  const [selecteComponents, setSelectedComponents] = useState({});
  const { selectedComponents, resetSelectedComponents } = usePCBuilderContext();

  const totalSelectedComponents = Object.values(selectedComponents).reduce(
    (total, categoryComponents) => total + categoryComponents.length,
    0
  );
  const handleCompleteBuild = () => {
    if (totalSelectedComponents >= 6) {
      router.push("/pc-builder");
      alert("Product added to the card. Thanks for choosing Pc_Builder 😃");
      resetSelectedComponents();
    } else {
      alert("Please select at least 6 components to complete the build.");
    }
  };

  const categories = [
    "cpuprocessor",
    "motherboard",
    "ram",
    "powersupplyunit",
    "storagedevice",
    "monitor",
    "others",
  ];

  return (
    <div className="container mx-auto">
      <div className="container">
        <Head>
          <title>PC_Builder | PC_Builder</title>
          <meta
            name="description"
            content="This is pc builder page by next-js"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/public/icon.png" />
        </Head>

        <h1 className="text-3xl text-sky-600 font-bold font-serif mb-8 text-center">
          PC Builder
        </h1>

        {categories.map((category) => (
          <div
            key={category}
            className="mb-8 text-secondary uppercase font-serif   m-4 "
          >
            <h2 className="text-xl font-bold text-start ">{category}</h2>
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-4 text-end ">
              <CategorySection
                category={category}
                selectedComponents={selectedComponents}
                setSelectedComponents={setSelectedComponents}
                initialData={initialData[category.toLowerCase()]}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-8">
          <button
            className="btn btn-secondary text-white px-4 py-2 rounded-md my-5 mb-10"
            disabled={totalSelectedComponents < 6}
            onClick={handleCompleteBuild}
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    "https://pc-builder-backend-gold.vercel.app/api/pc-components"
  );
  const initialData = await response.json();

  return {
    props: {
      initialData,
    },
  };
}

export default PCBuilder;
