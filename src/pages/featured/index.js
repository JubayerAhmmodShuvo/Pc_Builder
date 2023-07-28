
import Link from "next/link";

const featuredCategories = [
  { name: "CPU / Processor", route: "cpu-processor" },
  { name: "Motherboard", route: "motherboard" },
  { name: "RAM", route: "ram" },
  { name: "Power Supply Unit", route: "power-supply-unit" },
  { name: "Storage Device", route: "storage-device" },
  { name: "Monitor", route: "monitor" },
  { name: "Others", route: "others" },
];

const Featured = () => {
  return (
    <div>
      <h1>Featured Categories</h1>
      <div className="category-grid">
        {featuredCategories.map((category) => (
          <Link key={category.route} href={`/featured/${category.route}`}>
            <p className="category-card">
              <h2>{category.name}</h2>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
