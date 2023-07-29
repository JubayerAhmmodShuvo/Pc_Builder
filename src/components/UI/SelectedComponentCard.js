
import Image from "next/image";
import Link from "next/link";


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

const SelectedComponentCard = ({ component }) => {
  const randomColorIndex = Math.floor(Math.random() * cardColors.length);
  const randomColor = cardColors[randomColorIndex];

  return (
    <div className="mb-10 font-serif">
      <div
        className={`card w-96    text-black shadow-xl cursor-pointer mb-5  ${randomColor}`}
      >
        <Link
          className="no-underline  "
          href={`/products/${component._id}`}
          key={component._id}
        >
          <div>
            <Image
              src={component.image}
              alt={component.name}
              className="w-full h-96 object-cover rounded-md mb-4"
              width={500}
              height={500}
            />

            <h2 className="text-xl px-6 font-bold mt-6">{component.name}</h2>

            <p className="text-sm px-6 text-gray-500 mt-1">
              {component.category}
            </p>

            <p className="text-lg px-6 font-bold mt-1">
              ${component.price.toFixed(2)}
            </p>

            <div className="flex px-6 justify-between">
              <p
                className={`mt-1 ${
                  component.status === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {component.status}
              </p>
              <div className=" mt-1 ">
                <span className="text-yellow-500 text-2xl    mr-1">★</span>
                <span className="text-lg font-bold">{component.rating}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectedComponentCard;


