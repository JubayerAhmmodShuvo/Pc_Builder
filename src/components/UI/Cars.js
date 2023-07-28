
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
    <Link className="no-underline " href={`/products/${product._id}`} key={product._id}>
      <div
        className={`card w-96 px-8 h-full py-5 text-black shadow-xl cursor-pointer ${randomColor}`}
      >
      
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md"
        />

       
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>

    
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>


        <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>

        <p
          className={`mt-1 ${
            product.status === "In Stock" ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.status}
        </p>

    
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
