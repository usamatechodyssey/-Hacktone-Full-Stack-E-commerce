import Image from "next/image"; // Import Image component

interface CardProps {
  title: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, price, image }) => {
  return (
    <div className="text-center cursor-pointer bg-white shadow-md rounded-lg p-4  transform transition hover:scale-105 hover:shadow-lg duration-300">
      <div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto rounded-md mb-4"
        />
      </div>
      <h3 className=" text-left font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-left text-gray-600">£{price}</p>
    </div>
  );
};

export default Card;
