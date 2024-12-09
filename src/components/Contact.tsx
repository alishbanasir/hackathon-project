import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import group from "../cardimage/Group 124.png";

export default function Contact() {
  return (
    <div>
    <div className="max-w-[1177px] mx-auto  h-auto">
  

    <div className="text-gray-600 max-w-[1177px] mx-auto  h-auto body-font">

 <div className="container px-5 py-5 mx-auto">

   <div className="flex flex-wrap -m-4">

     <div className="p-4 md:w-1/2 w-full">

   <div className="h-full bg-white p-8 rounded">
         
          <p className="leading-relaxed text-[30px] font-extrabold text-blue-950 mb-6">
          Information About us
          </p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit dolor delectus quidem, odit possimus quis aliquid repellat ducimus aliquam rerum ab repudiandae modi facere nostrum, vel, enim fugit nesciunt.
          </p>
          <div className="flex gap-1 justify-start ">
          <p className="text-[25px] text-blue-500"><FaCircle /></p>
          <p className="text-[25px] text-pink-500"><FaCircle /></p>
          <p className="text-[25px] text-green-500"><FaCircle /></p>
          </div>
           
    
        </div></div>

        <div className="p-4 md:w-1/2 w-full">

   <div className="h-full bg-white p-8 rounded">
         
          <p className="leading-relaxed text-[30px] font-extrabold text-blue-950 mb-6">
          Contact Way
          </p>
          <div className="flex justify-between flex-wrap">
            <div className="flex">
            <p className="text-[20px] mt-1 text-pink-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor nesciunt. <br />aspernatur nam nobis.
          </p>
          </div>
          <div className="flex">
            <p className="text-[20px] mt-1 text-blue-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
          Lorem ipsum dolor nesciunt. <br />aspernatur nam nobis.
          </p>
          </div>
</div>

          <div className="flex flex-wrap justify-between">
            <div className="flex">
            <p className="text-[20px] mt-1 text-green-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
          Lorem ipsum dolor nesciunt. <br />aspernatur nam nobis.

          </p>
          </div>
          <div className="flex">
            <p className="text-[20px] mt-1 text-orange-500"><FaCircle /></p>
          <p className="leading-relaxed mb-6">
          Lorem ipsum dolor nesciunt. <br />aspernatur nam nobis.
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
        
         <p className="font-Josefin Sans  leading-[48px] text-[30px] font-extrabold text-blue-950 mb-3">
         Get In Touch
         </p>
         <p className="leading-7 mb-6 mt-3">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit dolor delectus quidem, odit possimus quis aliquid repellat ducimus aliquam rerum ab repudiandae modi facere nostrum, vel, enim fugit nesciunt.
         </p>
         <div className="flex flex-wrap gap-3 justify-between ">
         <p className=" bottom-2 focus:outline-none rounded-md border-2 text-center p-1  text-black"><input type="text" placeholder="Your Name" /></p>
         <p className=" bottom-2 focus:outline-none rounded-md border-2 text-center p-1  text-black"><input type="email" placeholder="Your Email" /></p>
       
         </div>
         <br />
         <div className="leading-5">
         <p className=" bottom-2 focus:outline-none rounded-md w-auto border-2  py-2 text-black"><input type="email" placeholder="Subject" /></p><br />
         <p className=" bottom-2 focus:outline-none rounded-md w-auto border-2 py-8  text-black"><input type="email"  placeholder="Type of Message" /></p>
         </div><br />
        <p className="p-3 bg-[rgba(251,46,134,1)] rounded-md w-40 text-white text-center">Send Mail</p>
       </div></div>

       <div className="p-4 md:w-1/2 w-full">

  <div className="h-full bg-white  rounded">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<Image className="object-cover object-center rounded" alt="hero" src={group} width={720} height={600}/>
</div> 
         </div>
         </div><br />
         </div>
       </div>
     </div>
   </div>   
  );
}
