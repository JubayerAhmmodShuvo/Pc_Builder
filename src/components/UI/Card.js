
import { usePCBuilderContext } from "@/components/contexts/PCBuilderContext";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const cardColors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-red-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-indigo-300",
  "bg-orange-300",
  "bg-teal-300",
  "bg-cyan-300",
  "bg-lime-300",
  "bg-emerald-300",
  "bg-amber-300",
  "bg-fuchsia-300",
  "bg-rose-300",
  "bg-lightblue-300",
  "bg-lightgreen-300",
  "bg-deepskyblue-300",
  "bg-deeppink-300",
  "bg-tomato-300",

];


const Card = ({ product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { selectedComponents, setSelectedComponents } = usePCBuilderContext();
 const handleAddToBuilder = () => {
   setSelectedComponents((prevSelectedComponents) => {
     const categoryKey = product.category.toLowerCase().replace(/\s/g, "");
     const categoryComponents = prevSelectedComponents[categoryKey] || [];
     
       

     return {
       ...prevSelectedComponents,
       [categoryKey]: [...categoryComponents, product],
     };
   });

   alert("Component added to PC Builder.");
   router.push("/pc-builder");
 };



  const randomColorIndex = Math.floor(Math.random() * cardColors.length);
  const randomColor = cardColors[randomColorIndex];

  return (
    <div className="mb-10 font-serif">
      <div
        className={`card w-96    text-black shadow-xl cursor-pointer mb-5  ${randomColor}`}
      >
        <Link
          className="no-underline  "
          href={`/products/${product._id}`}
          key={product._id}
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl px-6 font-bold mt-6">{product.name}</h2>

            <p className="text-sm px-6 text-gray-500 mt-1">
              {product.category}
            </p>

            <p className="text-lg px-6 font-bold mt-1">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex px-6 justify-between">
              <p
                className={`mt-1 ${
                  product.status === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.status}
              </p>
              <div className=" mt-1 ">
                <span className="text-yellow-500 text-2xl    mr-1">★</span>
                <span className="text-lg font-bold">{product.rating}</span>
              </div>
            </div>
          </div>
        </Link>
        {session?.user &&
          (product.status === "In Stock" ? (
            <button
              className="btn btn-secondary border-spacing-0 text-white img2 rounded-md mt-4"
              onClick={handleAddToBuilder}
            >
              Add to PC Builder
            </button>
          ) : (
            <button
              className="btn btn-disabled border-spacing-0 text-gray-500 px-4 py-2 rounded-md mt-4"
              disabled
            >
              Out of stock
            </button>
          ))}
      </div>
    </div>
  );
};

export default Card;
