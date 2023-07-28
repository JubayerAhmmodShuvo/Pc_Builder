import Banner from "@/components/UI/Banner";

export default function Home({ featuredProducts }) {
  return (
    <>
      <Banner />
      <div className="flex justify-center my-12">
        <div className="grid lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product._id}
              className="p-4 bg-teal-50 card w-96 rounded-lg shadow-md text-black"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-md"
              />

              <h3 className="text-xl text-black font-bold mt-2">
                {product.name}
              </h3>

              <p className="text-lg text-gray-500 mt-1">{product.category}</p>

              <p className="text-lg font-bold mt-1">
                ${product.price.toFixed(2)}
              </p>

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
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3001/api/pc-components");
    const allFeaturedProducts = await res.json();
    const featuredProducts = filterFeaturedProducts(allFeaturedProducts);

    return {
      props: {
        featuredProducts,
      },
    };
  } catch (error) {
    return {
      props: {
        featuredProducts: [],
      },
    };
  }
}

function filterFeaturedProducts(allProducts) {
  const featuredProductsMap = new Map();
  const featuredProducts = [];


  allProducts.forEach((product) => {
    if (!featuredProductsMap.has(product.category)) {
      featuredProductsMap.set(product.category, product);
      featuredProducts.push(product);
    }
  });

  return featuredProducts;
}
