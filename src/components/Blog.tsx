import Image from "next/image";
import blog2 from "../cardimage/blog2.png";
import blog3 from "../cardimage/blog3.png";
import blog from "../cardimage/blog.png"
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
export default function Blog() {
  return (
    <div className="max-w-[1177px] mx-auto  h-auto">
            <div className="flex flex-wrap justify-evenly p-5   bg-white">
            <div className="mt-2">
            <Image src={blog} alt="Blog Image" className="mb-4 w-full max-w-sm rounded-lg" />
          
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
              <p className="text-pink-700"><FaPenNib  /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
              <p className="text-pink-700" ><FaRegCalendarAlt /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-base font-medium text-[14px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo unde dolorem sunt consectetur voluptatem harum a repellendus magnam ducimus dolorum dicta?
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[20px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500"><FaCircle /></p>
            </div>
</div>

          </div>
<div className="mt-2">

          <Image src={blog2} alt="Blog Image" className="mb-4 w-full max-w-sm rounded-lg" />
          
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
              <p className="text-pink-700"><FaPenNib  /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
              <p className="text-pink-700" ><FaRegCalendarAlt /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sit nam congue feugiat nisl, mauris amet nisi. 
            </h1>
            <p className="text-base font-medium text-[14px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo unde dolorem sunt consectetur voluptatem harum a repellendus magnam ducimus dolorum dicta?
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[20px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500"><FaCircle /></p>
            </div>
          </div>
          </div>
          <div className="mt-2">
            <Image src={blog3} alt="Blog Image" className="mb-4 w-full max-w-sm rounded-lg" />
          
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
              <div className="flex items-center gap-3">
              <p className="text-pink-700"><FaPenNib  /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Surf Auxion
                </p>
              </div>
              <div className="flex items-center gap-3">
              <p className="text-pink-700" ><FaRegCalendarAlt /></p>
                <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
                  Aug 09 2020
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Aenean vitae in aliquam ultrices lectus. Etiam.
            </h1>
            <p className="text-base font-medium text-[14px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem sunt. Ipsum, assumenda eligendi impedit perspiciatis, quidem nemo unde dolorem sunt consectetur voluptatem harum a repellendus magnam ducimus dolorum dicta?
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <p className="text-[20px] font-normal">Read More</p>
              <p className="text-[10px] mb-2 text-pink-500"><FaCircle /></p>
            </div>
            </div>
          </div>
          <div className="mt-2">

<Image src={blog} alt="Blog Image" className="mb-4 w-full max-w-sm rounded-lg" />

<div className="w-full max-w-lg">
  <div className="flex flex-wrap py-3 mb-3 gap-4 justify-center">
    <div className="flex items-center gap-3">
    <p className="text-pink-700"><FaPenNib  /></p>
      <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
        Surf Auxion
      </p>
    </div>
    <div className="flex items-center gap-3">
    <p className="text-pink-700" ><FaRegCalendarAlt /></p>
      <p className="bg-pink-300 text-[15px] px-5 py-1 font-bold rounded">
        Aug 09 2020
      </p>
    </div>
  </div>
  <h1 className="text-2xl font-bold text-gray-900 mb-4">
  Mauris at orci non vulputate diam tincidunt nec.
  </h1>
  <p className="text-base font-medium text-[14px] leading-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem sunt. Ipsum, assumenda eligendi impedit perspiciatis, uidem nemo unde dolorem sunt consectetur voluptatem harum a repellendus magnam ducimus dolorum dicta?
  </p>
  <div className="flex justify-center items-center gap-1 mt-4">
    <p className="text-[20px] font-normal">Read More</p>
   <p className="text-[10px] mb-2 text-pink-500"><FaCircle /></p>
  </div>
</div>
</div>
        </div>
    </div>
  );
}
