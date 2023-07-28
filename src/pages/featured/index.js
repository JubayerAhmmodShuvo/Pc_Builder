import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const featuredCategories = [
  { name: "CPU / Processor", route: "cpu-processor" },
  { name: "Motherboard", route: "motherboard" },
  { name: "RAM", route: "ram" },
  { name: "Power Supply Unit", route: "power-supply-unit" },
  { name: "Storage Device", route: "storage-device" },
  { name: "Monitor", route: "monitor" },
  { name: "Others", route: "others" },
];

const colorOptions = [
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

const hoverOptions = [
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-red-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
];

const getRandomColor = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const Featured = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>PC_Builder | Featured</title>
        <meta
          name="description"
          content="This is pc builder featured page made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <h1 className="text-3xl text-sky-600 font-bold font-serif mb-8 text-center">
        Featured Categories
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-3 gap-8  lg:ml-10 my-20 ">
          {featuredCategories.map((category) =>
            isClient ? (
              <Link
                className="no-underline"
                key={category.route}
                href={`/featured/${category.route}`}
              >
                <div
                  className={`group card w-96 h-48 text-black flex items-center justify-center shadow-xl ${getRandomColor(
                    colorOptions
                  )}`}
                >
                  <div
                    className={`group-hover:${getRandomColor(
                      hoverOptions
                    )} transition-colors duration-300 w-full h-full flex items-center justify-center hover:text-red-800`}
                  >
                    <h2 className="text-2xl font-serif font-bold">
                      {category.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={category.route}
                className={`card w-96 h-48 text-black flex items-center justify-center shadow-xl ${getRandomColor(
                  colorOptions
                )}`}
              >
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
