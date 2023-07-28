import Card from "@/components/UI/Card";


const CPUProcessor = ({ products }) => {
  return (
    <div>
      <h1 className="text-3xl text-sky-600 font-bold font-serif mb-8 text-center">
        Category: CPU / Processor
      </h1>
      <div className="flex items-center justify-center my-8 mb-28">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3001/api/pc-components");
    const allProducts = await res.json();

    const cpuProducts = allProducts.filter(
      (product) => product.category === "CPU / Processor"
    );

    return {
      props: { products: cpuProducts },
    };
  } catch (error) {
    return {
      props: { products: [] },
    };
  }
}

export default CPUProcessor;
