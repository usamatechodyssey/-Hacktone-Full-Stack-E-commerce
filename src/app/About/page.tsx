import Section from "../componenet/listing";
import Abbu from "../componenet/feautures";
import NewsletterForm from "../componenet/two-baner";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[277px] gap-6 md:gap-0">
          <div className="flex-1 text-center">
            <h1 className="font-normal text-2xl xm:text-2xl md:text-4xl lg:text-5xl leading-snug">
              A brand built on the love of craftsmanship, quality, and
              outstanding customer service
            </h1>
          </div>
          <div>
            <button className="w-full sm:w-[192px] h-[56px] bg-[#F9F9F9] px-6 py-2 text-sm md:text-base rounded hover:bg-gray-200 transition">
              View our products
            </button>
          </div>
        </div>

        {/* Section Component */}
        <Section />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Right Section */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[478px]">
            <Image
              src="/Image3.jpg"
              alt="Room decor"
              width={1000} // Define width
              height={1000} // Define height
              className="w-full h-full object-cover"
              priority // Optimize for faster loading
            />
          </div>

          {/* Left Section */}
          <div className="bg-[#F9F9F9] text-[#2A254B] p-6 md:p-8 lg:p-12 flex flex-col justify-center items-start w-full md:w-1/2 h-auto md:h-[478px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h2>
            <div>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                When we started Avion, the idea was simple. Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-6">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe, and design so our Chelsea boutique became the
                hotbed for the London interior design community.
              </p>
            </div>
            <button className="bg-gray-200 text-black px-4 py-2 text-sm md:text-base rounded hover:bg-gray-300 transition">
              View collection
            </button>
          </div>
        </div>
      </div>

      {/* Abbu Component */}
      <Abbu />

      {/* Newsletter Form Component */}
      <NewsletterForm />
    </div>
  );
}
