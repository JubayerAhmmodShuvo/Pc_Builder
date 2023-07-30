import { usePCBuilderContext } from "@/components/contexts/PCBuilderContext";
import { useEffect, useState } from "react";
import Link from "next/link";

const CategorySection = ({ category }) => {
  const { selectedComponents, setSelectedComponents } = usePCBuilderContext();
  const categoryKey = category.toLowerCase().replace(/\s/g, "");
  const categoryComponents = selectedComponents[categoryKey] || [];
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [lastAddedProductId, setLastAddedProductId] = useState(null);

  useEffect(() => {
    setIsTableVisible(categoryComponents.length > 0);
  }, [categoryComponents]);

  useEffect(() => {
    
    if (categoryComponents.length > 0) {
      setLastAddedProductId(
        categoryComponents[categoryComponents.length - 1]._id
      );
    }
  }, [categoryComponents]);

  const handleRemoveFromBuilder = (component) => {
    setSelectedComponents((prevSelectedComponents) => {
      const updatedComponents = categoryComponents.filter(
        (item) => item._id !== component._id
      );
      return {
        ...prevSelectedComponents,
        [categoryKey]: updatedComponents,
      };
    });
  };

  const handleSelectComponent = (component) => {
    setSelectedComponents((prevSelectedComponents) => ({
      ...prevSelectedComponents,
      [categoryKey]: [...categoryComponents, component],
    }));
    setLastAddedProductId(component._id);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex lg:flex-row flex-col text-black">
        {isTableVisible || categoryComponents.length >= 6 ? (
          <table className="table text-center">
            <thead>
              <tr className="text-black no-underline">
                <th className="px-4 py-2">Product Image</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Actions</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {categoryComponents.map((component) => (
                <tr key={component._id}>
                  <td className="border px-4 py-2">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-16 object-cover rounded-md mb-4"
                    />
                  </td>
                  <td className="border px-4 py-2">{component.name}</td>
                  <td className="border px-4 py-2">
                    ${component.price.toFixed(2)}
                  </td>
                  <td className="border px-4 py-2">{component.status}</td>
                  <td className="border px-4 py-2">{component.rating}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn btn-error text-white px-2 py-1"
                      onClick={() => handleRemoveFromBuilder(component)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border px-2 py-1">
                    {component._id === lastAddedProductId && (
                      <Link
                        href={`/selecproduct/${category.replace(/\s/g, "-")}`}
                      >
                        <button className="btn btn-secondary text-white hover:text-black hover:bg-green-100 rounded-md">
                          Select
                        </button>
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Link href={`/selecproduct/${category.replace(/\s/g, "-")}`}>
              <div className="btn btn-secondary text-white px-4 py-2 w-36 hover:text-black hover:bg-green-100 rounded-md">
                Select {categoryKey}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
