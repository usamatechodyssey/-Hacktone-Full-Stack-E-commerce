// components/ProductList.tsx
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4  gap-8 w-full ">
      {products.map((product) => (
        <div
          key={product._id}
          className="text-center cursor-pointer bg-white shadow-md rounded-lg p-4 transform transition hover:scale-105 hover:shadow-lg duration-300"
        >
          <Link href={`/Products/${product.slug}`}>
            <div className="w-full h-72 relative">
              {" "}
              {/* Fixed size container */}
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill // Fill the container
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg" // Maintain aspect ratio
              />
            </div>
            <h3 className="text-left font-medium text-gray-800 mt-4">
              {product.name}
            </h3>
            <p className="text-sm text-left text-red-500 line-through">
              Rs:499
            </p>
            <p className="text-sm text-left text-gray-600">
              Rs:{product.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
