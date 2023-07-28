
import Link from "next/link";

const cardColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
];

const Card = ({ product }) => {

  const randomColorIndex = Math.floor(Math.random() * cardColors.length);
  const randomColor = cardColors[randomColorIndex];

  return (
    <div className="mb-10">
      <Link
        className="no-underline  "
        href={`/products/${product._id}`}
        key={product._id}
      >
        <div
          className={`card w-96 px-8 max-h-screen py-5 text-black shadow-xl cursor-pointer mb-5  ${randomColor}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-md mb-4"
          />

          <h2 className="text-xl font-bold mt-6">{product.name}</h2>

          <p className="text-sm text-gray-500 mt-1">{product.category}</p>

          <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>

          <div className="flex justify-between">
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
              <span className="text-yellow-500   mr-1">★</span>
              <span className="text-lg">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
