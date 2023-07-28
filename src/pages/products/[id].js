import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  const [isClient, setIsClient] = useState(false);
  const [productData, setProductData] = useState(product);

  useEffect(() => {
    setIsClient(true);
    if (!productData) {
      fetchProductData();
    }
  }, []);

  const fetchProductData = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/pc-components/${id}`);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

const cardColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-cyan-200",
  "bg-lime-200",
  "bg-emerald-200",
  "bg-amber-200",
  "bg-fuchsia-200",
  "bg-rose-200",
  "bg-lightblue-200",
  "bg-lightgreen-200",
  "bg-deepskyblue-200",
  "bg-deeppink-200",
  "bg-tomato-200",
  
];


  const randomColorIndex = Math.floor(Math.random() * cardColors.length);
  const randomColor = cardColors[randomColorIndex];

  return (
    <>
        <h1 className="text-3xl text-sky-800 underline font-bold font-serif mb-8 text-center">
          Details Of the Product
        </h1>
      <div className="flex justify-center my-20 font-serif">
        <div
          className={`card  px-8 min-h-screen py-5 text-black shadow-xl mb-5 ${randomColor}`}
        >
          {productData ? (
            <>
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mt-2">{productData.name}</h2>
              <p className="text-lg text-gray-500 mt-1">
                {productData.category}
              </p>
              <p className="text-lg font-bold mt-1">
                ${productData.price.toFixed(2)}
              </p>
              <p className="mt-4">{productData.description}</p>
              <h2 className="text-lg font-bold mt-4">Key Features:</h2>
              <ul className="list-disc pl-6">
                {productData.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-4">
                <p
                  className={`mr-2 ${
                    productData.status === "In Stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {productData.status}
                </p>
                <div className="flex items-center ">
                  <span className="text-yellow-500 text-2xl mr-1">★</span>
                  <span className="text-lg font-bold">
                    {productData.rating}
                  </span>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-4 text-center">Reviews:</h2>
              <ul className="list-disc pl-6">
                {productData.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const res = await fetch(`http://localhost:3001/api/pc-components/${id}`);
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
      },
    };
  }
}

export default ProductDetail;
