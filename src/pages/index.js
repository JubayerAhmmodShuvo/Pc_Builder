import Banner from "@/components/UI/Banner";
import Card from "@/components/UI/Card";


export default function Home({ featuredProducts }) {
  return (
    <>
      <Banner />

      <h1 className="text-4xl text-center font-serif font-bold my-12  underline text-fuchsia-500">
        Featured Product
      </h1>
      <div className="flex justify-center my-12">
        <div className="grid lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <Card key={product._id} product={product} />
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
