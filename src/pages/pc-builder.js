

  import { usePCBuilderContext } from "@/components/contexts/PCBuilderContext";
  import { useEffect, useState } from "react";
  import Link from "next/link";
  import SelectedComponentCard from "@/components/UI/SelectedComponentCard";


const PCBuilder = () => {
  const { selectedComponents } = usePCBuilderContext();


  const totalSelectedComponents = Object.values(selectedComponents).reduce(
    (total, categoryComponents) => total + categoryComponents.length,
    0
  );

 
  const categories = [
    "cpu-processor",
    "motherboard",
    "ram",
    "power-supply-unit",
    "storage-device",
    "monitor",
    "others"
  ];

  return (
    <div>
      <h1 className="text-3xl text-sky-600 font-bold font-serif mb-8 text-center">
        PC Builder
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/featured/${category.replace(/\s/g, "-")}`}
          >
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Select {category}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {categories.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          disabled={totalSelectedComponents < 5}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

const CategorySection = ({ category }) => {
  const { selectedComponents, setSelectedComponents } = usePCBuilderContext();

  useEffect(() => {
  
  }, []);

  const handleAddToBuilder = (component) => {
    setSelectedComponents((prevSelectedComponents) => {
      const categoryKey = category.replaceAll(/\s/g, "-").toLowerCase();

      const categoryComponents =
        selectedComponents[category.replaceAll(/\s/g, "-").toLowerCase()] || [];

     
      const existingComponentIndex = categoryComponents.findIndex(
        (item) => item._id === component._id
      );

      if (existingComponentIndex !== -1) {
        const updatedComponents = [...categoryComponents];
        updatedComponents[existingComponentIndex] = component;
        return {
          ...prevSelectedComponents,
          [categoryKey]: updatedComponents,
        };
      } else {
        return {
          ...prevSelectedComponents,
          [categoryKey]: [...categoryComponents, component],
        };
      }
    });

    alert("Component added to PC Builder.");
  };

  const categoryComponents =
    selectedComponents[category.toLowerCase().replace(/\s/g, "-")] || [];

  return (
    <div>
      <h2 className="text-xl font-bold mt-4">{category}</h2>
      {categoryComponents.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {categoryComponents.map((component) => (
            <SelectedComponentCard key={component._id} component={component} />
          ))}
        </div>
      ) : (
        <p>No {category} components selected.</p>
      )}
    </div>
  );
};
  export default PCBuilder;
