
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import chair1 from "../cardimage/chair1.png";
import chair2 from "../cardimage/chair2.png";
import chair3 from "../cardimage/chair3.png";
import chair4 from "../cardimage/chair4.png";
import { MdHorizontalRule } from "react-icons/md";
const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa1.png", 
    lampImage: "/images/lamp.png",  
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa1.png", 
    lampImage: "/images/lamp.png",  
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa1.png",  
    lampImage: "/images/lamp.png",  
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];
  return (
    <div>
    <div className="bg-gray-100">
      <section className="relative max-w-[1177px] bg-gray-100 py-5 mx-auto md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/4 flex justify-center max-w-[1177px] items-start relative">
          <div className="absolute top-[-350px] left-[-41px] z-10">
            <Image
              src={current.lampImage || '/images/lamp.png'}  
              alt="Lamp"
              width={387}
              height={387}
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <p className="text-sm text-pink-500 font-medium">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
            {current.title}
          </h1>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            {current.description}
          </p>
          <Link
            href="#"
            className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
          >
            {current.buttonText}
          </Link>
        </div>

        <div className="md:w-1/3 flex justify-center items-center relative">
          <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
            <Image
              src={current.chairImage || '/images/sofa1.png'}  
              alt="Furniture Chair"
              width={706}
              height={689}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-pink-500" : "bg-gray-300 hover:bg-gray-400"}`}
            ></button>
          ))}
        </div>

        <button
          onClick={handlePrevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
        >
          ❯
        </button>
      </section>
    </div>


<div className="bg-white">
  <div className="max-w-[1177px] mx-auto ">
    <div>
    <h4 className="text-center justify-center mt-3 p-5 text-[28px] 
caption title text-[rgba(26, 11, 91, 1)] " >Featured Products</h4>
  </div>
  <div className="">
  <section className="text-gray-600 body-font">
      <div className="container py-2 px-3 bg-white mx-auto">
    
        <div className="flex flex-wrap ">
          {/* Team Member 1 */}
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/4 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-[200px] h-56 p-5 object-cover object-center mb-4" src={chair1} />
              <div className="w-full bg-white ">
              <h2 className="title-font font-medium text-lg text-[rgba(251,46,134,1)] mt-2 ">Cantilever chair</h2>
                <div className="flex text-center items-center justify-center">
               
                <h3 className="text-green-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-pink-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-blue-500 text-[25px] text-center"><MdHorizontalRule />
                </h3></div>
                <p className="mb-3 text-[14px] text-[rgba(21,24,117,1)]">Code - Y523201</p>
                <p className="mb-4 text-[12px] text-[rgba(21,24,117,1)]">$42.00</p>
              </div>
            </div>
          </div><br />
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg bg-[rgba(246,247,251,1)] w-[200px] h-56 p-5   object-cover object-center mb-4" src={chair2}  />
              <div className="w-full bg-[rgba(47,26,196,1)]">
              <h2 className="title-font font-medium text-lg text-white mt-2 ">Cantilever chair</h2>
                <div className="flex text-center items-center justify-center">
               
                <h3 className="text-green-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-pink-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-white text-[25px] text-center"><MdHorizontalRule />
                </h3></div>
                <p className="mb-3 text-[14px] text-white">Code - Y523201</p>
                <p className="mb-4 text-[12px] text-white">$42.00</p>
              </div>
            </div>
          </div><br />
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg bg-[rgba(246,247,251,1)] w-[200px] h-56 p-5 object-cover object-center mb-4" src={chair3} />
              <div className="w-full bg-white">
              <h2 className="title-font font-medium text-lg text-[rgba(251,46,134,1)] mt-2 ">Cantilever chair</h2>
                <div className="flex text-center items-center justify-center">
               
                <h3 className="text-green-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-pink-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-blue-500 text-[25px] text-center"><MdHorizontalRule />
                </h3></div>
                <p className="mb-3 text-[14px] text-[rgba(21,24,117,1)]">Code - Y523201</p>
                <p className="mb-4 text-[12px] text-[rgba(21,24,117,1)]">$42.00</p>
              </div>
            </div>
          </div>
          <div className=" bg-[rgba(246,247,251,1)]  shadow-xl lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg bg-[rgba(246,247,251,1)] w-[200px] h-56 p-5 object-cover object-center mb-4" src={chair4} />
              <div className="w-full bg-white">
              <h2 className="title-font font-medium text-lg text-[rgba(251,46,134,1)] mt-2 ">Cantilever chair</h2>
                <div className="flex text-center items-center justify-center">
               
                <h3 className="text-green-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-pink-500 text-[25px] text-center"><MdHorizontalRule />
                </h3>
                <h3 className="text-blue-500 text-[25px] text-center"><MdHorizontalRule />
                </h3></div>
                <p className="mb-3 text-[14px] text-[rgba(21,24,117,1)]">Code - Y523201</p>
                <p className="mb-4 text-[12px] text-[rgba(21,24,117,1)]">$42.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div></div>
</div>
  );
}

export default HeroSection;








