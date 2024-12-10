import Link from "next/link";

const Product = () => {
  const products = [
    {
      id: "1",
      image: "/Photo.jpg", // Image should be in the 'public' folder
      title: "The Dandy chair",
      price: "£250",
    },
    {
      id: "2",
      image: "/Photo2.jpg",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      id: "3",
      image: "/Photo3.jpg",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      id: "4",
      image: "/Photo4.jpg",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 lg:px-20">
      <h1 className="font-normal text-3xl py-4">You might also like</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center cursor-pointer">
            <Link href={`/Products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-md shadow-sm mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
