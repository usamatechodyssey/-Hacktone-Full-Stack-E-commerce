import Link from "next/link"; // Import Link
import { Product2 } from "./products2";
import Card from "./rendercard"; // Card component

const Product = () => {
  return (
    <>
      <div className="bg-white py-12 px-4 lg:px-20">
        <h1 className="font-normal text-3xl py-4">You might also like</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {Product2.map((product) => (
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
