

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
    <div>
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
          className="mb-8 text-secondary uppercase font-serif text-center  m-4 "
        >
          <h2 className="text-xl font-bold">{category}</h2>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
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
  );
};






// const CategorySection = ({ category }) => {
//   const { selectedComponents, setSelectedComponents } = usePCBuilderContext();
//   const categoryKey = category.toLowerCase().replace(/\s/g, "");
//   const categoryComponents = selectedComponents[categoryKey] || [];
//   const [isTableVisible, setIsTableVisible] = useState(false);

//   useEffect(() => {
//     setIsTableVisible(categoryComponents.length > 0);
//   }, [categoryComponents]);

//   const handleRemoveFromBuilder = (component) => {
//     setSelectedComponents((prevSelectedComponents) => {
//       const updatedComponents = categoryComponents.filter(
//         (item) => item._id !== component._id
//       );
//       return {
//         ...prevSelectedComponents,
//         [categoryKey]: updatedComponents,
//       };
//     });
//   };

//   const totalSelectedComponents = Object.values(selectedComponents).reduce(
//     (total, categoryComponents) => total + categoryComponents.length,
//     0
//   );

//   return (
//     <div className="overflow-x-auto">
//       <div className="flex lg:flex-row flex-col text-black">
//         {isTableVisible || totalSelectedComponents >= 6 ? (
//           <table className="table text-center">
//             <thead>
//               <tr className="text-black no-underline">
//                 <th className="px-4 py-2">Product Image</th>
//                 <th className="px-4 py-2">Product Name</th>
//                 <th className="px-4 py-2">Price</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Rating</th>
//                 <th className="px-4 py-2">Actions</th>
//                 <th className="px-4 py-2"></th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {categoryComponents.map((component) => (
//                 <tr key={component._id}>
//                   <td className="border px-4 py-2">
//                     <img
//                       src={component.image}
//                       alt={component.name}
//                       className="w-16 object-cover rounded-md mb-4"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">{component.name}</td>
//                   <td className="border px-4 py-2">
//                     ${component.price.toFixed(2)}
//                   </td>
//                   <td className="border px-4 py-2">{component.status}</td>
//                   <td className="border px-4 py-2">{component.rating}</td>
//                   <td className="border px-4 py-2">
//                     <button
//                       className="btn btn-error text-white px-2 py-1"
//                       onClick={() => handleRemoveFromBuilder(component)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                   <td className="border px-2 py-1">
                    
//                     <Link
//                       href={`/selecproduct/${category.replace(/\s/g, "-")}`}
//                     >
//                       <button className="btn btn-secondary text-white  hover:text-black hover:bg-green-100 rounded-md">
//                         Select 
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="flex flex-col items-center justify-center w-full h-full">
//             <Link href={`/selecproduct/${category.replace(/\s/g, "-")}`}>
//               <div className="btn btn-secondary text-white px-4 py-2 w-36 hover:text-black hover:bg-green-100 rounded-md">
//                 Select {categoryKey}
//               </div>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


export async function getServerSideProps() {
 
  const response = await fetch("https://pc-builder-backend-gold.vercel.app/api/pc-components");
  const initialData = await response.json();


  return {
    props: {
      initialData,
    },
  };
}


export default PCBuilder;