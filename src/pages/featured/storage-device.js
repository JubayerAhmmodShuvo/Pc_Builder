import Card from "@/components/UI/Card";
import SelectedCopmonentCard from "@/components/UI/SelectedComponentCard";
import Head from "next/head";


const StorageDevice = ({ products }) => {
  return (
    <div>
      <Head>
        <title>PC_Builder | Featured | StorageDevice</title>
        <meta
          name="description"
          content="This is featured page StorageDevice made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-sky-600 font-bold font-serif mb-8 text-center">
        Category: Storage Device
      </h1>
      <div className="flex items-center justify-center my-8 mb-28">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {products.map((product) => (
            <SelectedCopmonentCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://pc-builder-backend-gold.vercel.app/api/pc-components");
    const allProducts = await res.json();

    const storageProducts = allProducts.filter(
      (product) => product.category === "Storage Device"
    );

    return {
      props: { products: storageProducts },
    };
  } catch (error) {
    return {
      props: { products: [] },
    };
  }
}

export default StorageDevice;
