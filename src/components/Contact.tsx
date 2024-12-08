import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import group from "../cardimage/Group 124.png";

export default function Contact() {
  return (
    <div>
    <div className="max-w-[1177px] mx-auto  h-auto">
  

    <div className="text-gray-600 max-w-[1177px] mx-auto  h-auto body-font">

 <div className="container px-5 py-24 mx-auto">

   <div className="flex flex-wrap -m-4">

     <div className="p-4 md:w-1/2 w-full">

   <div className="h-full bg-white p-8 rounded">
         
          <p className="leading-relaxed text-[30px] font-extrabold text-blue-950 mb-6">
          Information About us
          </p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit dolor delectus quidem, odit possimus quis aliquid repellat ducimus aliquam rerum ab repudiandae modi facere nostrum, vel, enim fugit nesciunt.
          </p>
          <div className="flex justify-start ">
          <p className="text-[20px] text-blue-500"><FaCircle /></p>
          <p className="text-[20px] text-pink-500"><FaCircle /></p>
          <p className="text-[20px] text-green-500"><FaCircle /></p>
          </div>
           
    
        </div></div>

        <div className="p-4 md:w-1/2 w-full">

   <div className="h-full bg-white p-8 rounded">
         
          <p className="leading-relaxed text-[30px] font-extrabold text-blue-950 mb-6">
          Contact Way
          </p>
          <div className="flex justify-between flex-wrap">
            <div className="flex">
            <p className="text-[20px] text-pink-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor nesciunt.
          </p>
          </div>
          <div className="flex">
            <p className="text-[20px] text-blue-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor nesciunt.
          </p>
          </div>
</div>

          <div className="flex flex-wrap justify-between">
            <div className="flex">
            <p className="text-[20px] text-green-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
          Lorem ipsum dolor nesciunt.
          </p>
          </div>
          <div className="flex">
            <p className="text-[20px] text-orange-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
          Lorem ipsum dolor nesciunt.
          </p>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="text-gray-600 max-w-[1177px] mx-auto  h-auto body-font">

<div className="container  mx-auto">

  <div className="flex flex-wrap -m-4">

    <div className="p-4 md:w-1/2 w-full">

  <div className="h-full bg-white p-8 rounded">
        
         <p className="leading-relaxed text-[30px] font-extrabold text-blue-950 mb-6">
         Get In Touch
         </p>
         <p className="leading-relaxed mb-6 mt-5">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit dolor delectus quidem, odit possimus quis aliquid repellat ducimus aliquam rerum ab repudiandae modi facere nostrum, vel, enim fugit nesciunt.
         </p>
         <div className="flex justify-start ">
         <p className="text-[20px] text-blue-500"><FaCircle /></p>
         <p className="text-[20px] text-pink-500"><FaCircle /></p>
         <p className="text-[20px] text-green-500"><FaCircle /></p>
         </div>
       </div></div>

       <div className="p-4 md:w-1/2 w-full">

  <div className="h-full bg-white  rounded">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<Image className="object-cover object-center rounded" alt="hero" src={group} width={720} height={600}/>
</div> 
         </div>
         </div>
         </div>
       </div>
     </div>
   </div>   
  );
}
