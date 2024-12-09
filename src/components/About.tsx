import Image from "next/image";
import client from "../cardimage/client.png";
import Link from "next/link";
import track from "../cardimage/track.png";
import cashback from "../cardimage/cashback.png";
import star from "../cardimage/star.png";
import phone from "../cardimage/phone.png";
import group from "../cardimage/Group.png";

import { MdHorizontalRule } from "react-icons/md";


export default function About(){
    return(
        <div className="max-w-[1177px] mx-auto h-auto">
   
        <div className="container mx-auto py-5 px-5">
          <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start">
            <div className="w-full lg:w-1/2">
              <Image src={client} className="mb-4 rounded-3xl m-2 bg-white border-t-white border-r-white border-[20px] border-l-blue-800 border-b-blue-800 " alt="Blog Image" />
            </div>

            <div className="w-full lg:w-1/2 mt-12 lg:pl-10">
              <h1 className="text-[30px] font-extrabold text-gray-900">
              Know About Our Ecomerce
              Business, History
              </h1>
              <p className="text-base font-medium text-[20px] leading-8 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum. Vitae ultrices in in
                neque, porta dignissim. Adipiscing purus, cursus vulputate id
                dictum at.
              </p>
              <div className="flex gap-1 mt-10">
                <p className="p-3 bg-[rgba(251,46,134,1)] text-[20px] rounded-md w-40 text-white text-center"> <Link href="/contactus">Contact Us</Link></p>
             
              </div>
            </div>
          </div>
        
   



































          <div className="max-w-[1177px] mx-auto ">
          <h4 className="text-center justify-center mt-14 p-5 text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2  " >Our Features</h4>

          <div className="flex flex-wrap gap-4 mt-5 justify-center">
         
         <div className=" bg-[rgba(255,255,255,1)]  shadow-2xl lg:w-1/5 md:w-1/4">
             <div className="h-full flex flex-col py-8 px-2 items-center text-center">
               <Image alt="team" className="mt-4" src={track}  />
               <div className="w-full p-5 ">
               <h2 className="title-font font-bold text-[20px] text-lg text-[rgba(47,26,196,1)] mt-2 ">24/7 Support</h2>
            <p className=" text-[14px] mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
             </div>
           </div>
 <div className=" bg-[rgba(255,255,255,1)]  shadow-2xl lg:w-1/5 md:w-1/4">
             <div className="h-full flex flex-col py-8 px-2 items-center text-center">
               <Image alt="team" className="" src={cashback}  />
               <div className="w-full p-5 ">
               <h2 className="title-font font-bold text-[20px] text-lg text-[rgba(47,26,196,1)] mt-1 ">24/7 Support</h2>
             <p className=" text-[14px] mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              
               </div>
             </div>
           </div>
 
           <div className=" bg-[rgba(255,255,255,1)]  shadow-2xl lg:w-1/5 md:w-1/4">
             <div className="h-full flex flex-col py-8 px-2 items-center text-center">
               <Image alt="team" className="" src={star}  />
               <div className="w-full p-5 ">
               <h2 className="title-font font-bold text-[20px] text-lg text-[rgba(47,26,196,1)] mt-1 ">24/7 Support</h2>
             <p className=" text-[14px] mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p> 
               </div>
             </div>
           </div>
           <div className=" bg-[rgba(255,255,255,1)]  shadow-2xl lg:w-1/5 md:w-1/4">
             <div className="h-full flex flex-col py-8 px-2 items-center text-center">
               <Image alt="team" className="" src={phone}  />
               <div className="w-full p-5 ">
               <h2 className="title-font font-bold text-[20px] text-lg text-[rgba(47,26,196,1)] mt-1 ">24/7 Support</h2>
               
                
             <p className=" text-[14px] mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              
               </div>
             </div>
           </div>
 </div>









 <h4 className="text-center justify-center mt-14 p-5 text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2  " >Our Client Say!</h4>


<div className="max-w-[1177px] mx-auto ">
<div className="flex justify-center items-center text-center">
  <Image className="rounded-lg" src={group} alt="Centered Image" />
</div>
  <div className=" justify-center leading-10 items-center text-center"></div>
<h3 className="text-[25px] text-center mt-2">Selina Gomez</h3>
<p className="text-[12px] text-gray-500 text-center">Ceo At Webecy Digital</p>
  <p className="text-[15px] mt-3 text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum voluptates error quae architecto asperiores nulla expedita quaerat repudiandae, cum pariatur explicabo quis, ducimus labore repellat illum accusamus autem maxime.</p>


  <div className="flex text-center items-center mt-5 justify-center">
               <h3 className="text-pink-500  text-[35px] text-center"><MdHorizontalRule />
               </h3>
               <h3 className="text-pink-700 text-[40px] text-center"><MdHorizontalRule />
               </h3>
               <h3 className="text-pink-500  text-[35px] text-center"><MdHorizontalRule />
               </h3>
               </div>
</div>
</div>










</div>
          </div>


    )
}