import Image from "next/image";
import blog2 from "../cardimage/blog2.png";
import blog3 from "../cardimage/blog3.png";
import blog from "../cardimage/blog.png";
import company from "../cardimage/company.png";
import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
export default function Blog() {
  return (
    <div className="max-w-[1177px] mx-auto h-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 bg-white">
       

        <div className=" p-4 rounded-lg shadow-md">
          <Image
            src={blog}
            alt="Blog Image 1"
            className="mb-4 w-full h-56 object-cover rounded-lg"
          />
          <div>
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaPenNib />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaRegCalendarAlt />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-base font-medium text-gray-700 text-center leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem
              sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo
              unde dolorem sunt consectetur.
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[18px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500">
                <FaCircle />
              </p>
            </div>
          </div>
        </div>

        <div className=" p-4 rounded-lg shadow-md">
          <Image
            src={blog2}
            alt="Blog Image 2"
            className="mb-4 w-full h-56 object-cover rounded-lg"
          />
          <div>
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaPenNib />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaRegCalendarAlt />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-base font-medium text-gray-700 text-center leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem
              sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo
              unde dolorem sunt consectetur.
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[18px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500">
                <FaCircle />
              </p>
            </div>
          </div>
        </div>

        
        <div className="p-4 rounded-lg shadow-md">
          <Image
            src={blog3}
            alt="Blog Image 3"
            className="mb-4 w-full h-56 object-cover rounded-lg"
          />
          <div>
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaPenNib />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-pink-700">
                  <FaRegCalendarAlt />
                </p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-base font-medium text-gray-700 text-center leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem
              sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo
              unde dolorem sunt consectetur.
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[18px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500">
                <FaCircle />
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="max-w-[1177px] mx-auto">
  <div className="bg-white body-font">
    <div className="container mt-10 mx-auto flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <Image
          src={company}
          alt="Company Image"
          className="w-[100%] md:w-[60%] lg:w-[50%] h-auto object-contain"
        />
      </div>
    </div>
  </div>
</div>
</div>
  );
}

