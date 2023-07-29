import Banner from "@/components/UI/Banner";
import Card from "@/components/UI/Card";
import SelectedCopmonentCard from "@/components/UI/SelectedComponentCard";
import Head from "next/head";

export default function Home({ featuredProducts }) {
  return (
    <>
      <Head>
        <title>PC_Builder | Home</title>
        <meta
          name="description"
          content="This is pc builder homepage made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <Banner />

      <h1 className="text-4xl text-center font-serif font-bold my-12  underline text-fuchsia-500">
        Featured Product
      </h1>
      <div className="flex justify-center my-12">
        <div className="grid lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <SelectedCopmonentCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://pc-builder-backend-gold.vercel.app/api/pc-components"
    );
    const allFeaturedProducts = await res.json();
    const featuredProducts = filterFeaturedProducts(allFeaturedProducts);

    return {
      props: {
        featuredProducts,
      },
      revalidate: 5, 
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

  for (let i = featuredProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [featuredProducts[i], featuredProducts[j]] = [
      featuredProducts[j],
      featuredProducts[i],
    ];
  }

  return featuredProducts;
}
