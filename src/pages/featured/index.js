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

const cardColors = {
  "CPU / Processor": "bg-blue-200",
  Motherboard: "bg-green-200",
  RAM: "bg-yellow-200",
  "Power Supply Unit": "bg-red-200",
  "Storage Device": "bg-purple-200",
  Monitor: "bg-pink-200",
  Others: "bg-indigo-200",
};

const hoverColors = {
  "CPU / Processor": "bg-blue-400",
  Motherboard: "bg-green-400",
  RAM: "bg-yellow-400",
  "Power Supply Unit": "bg-red-400",
  "Storage Device": "bg-purple-400",
  Monitor: "bg-pink-400",
  Others: "bg-indigo-400",
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
                  className={`group card w-96 h-48 text-black flex items-center justify-center shadow-xl ${
                    cardColors[category.name]
                  }`}
                >
                  <div
                    className={`group-hover:${
                      hoverColors[category.name]
                    } transition-colors duration-300 w-full h-full flex items-center justify-center hover:text-red-800`}
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
                className={`card w-96 h-48 text-black flex items-center justify-center shadow-xl ${
                  cardColors[category.name]
                }`}
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
