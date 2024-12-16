import Link from "next/link"; // Import Link
import { Product3 } from "./products2"; // Product data
import Card from "./rendercard"; // Card component

const Product = () => {
  return (
    <>
      <div className="bg-white py-12 px-4 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {Product3.map((product) => (
            <Link key={product.id} href={`/Products/${product.id}`}>
              <Card
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
