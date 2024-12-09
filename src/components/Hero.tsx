import Lamp from "../public/images/lamp.png"
import sofa1 from "../public/images/sofa1.png"
import Image from "next/image";
import Link from "next/link";
import chair1 from "../cardimage/chair1.png";
import chair2 from "../cardimage/chair2.png";
import chair3 from "../cardimage/chair3.png";
import chair4 from "../cardimage/chair4.png";
import chair5 from "../cardimage/chair5.png";
import chair6 from "../cardimage/chair6.png";
import chair7 from "../cardimage/chair7.png";
import chair8 from "../cardimage/chair8.png";
import chair9 from "../cardimage/chair9.png";
import chair10 from "../cardimage/chair10.png";
import track from "../cardimage/track.png";
import cashback from "../cardimage/cashback.png";
import star from "../cardimage/star.png";
import phone from "../cardimage/phone.png";
import sofa from "../cardimage/sofa.png";
import chair11 from "../cardimage/chair11.png";
import { FaCircle } from "react-icons/fa6";


import { MdHorizontalRule } from "react-icons/md";
function HeroSection() {
  return (
    <div>
       {/* SECTION# 1 */}
    <div className="bg-gray-100">
      <section className="relative max-w-[1177px] bg-gray-100 py-5 mx-auto md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/4 flex justify-center max-w-[1177px] items-start relative">
          <div className="absolute top-[-350px] left-[-41px] z-10">
            <Image
              src={Lamp}  
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
          New Furniture Collection
          Trends in 2020
          </h1>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.
          </p>
          <Link
            href="#"
            className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
          >
            Shop Now
          </Link>
        </div>

        <div className="md:w-1/3 flex justify-center items-center relative">
          <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
            <Image
              src={sofa1}  
              alt="Furniture Chair"
              width={706}
              height={689}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
{/* Section 1 Done */}

{/* SECTION# 2 */}
<div className="bg-white">
  <div className="max-w-[1177px] mx-auto ">
    <div className="p-2">
    <h4 className="text-center justify-center mt-3 p-5 text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2 " >Featured Products</h4>
  </div>
  <div className="">
  <section className="text-gray-600 body-font">
      <div className="container py-2 px-3 bg-white mx-auto">
    
        <div className="flex flex-wrap gap-4 justify-center ">
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/5 md:w-1/2">
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
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/5 md:w-1/2">
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
          <div className=" bg-[rgba(246,247,251,1)] shadow-xl lg:w-1/5 md:w-1/2">
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
          <div className=" bg-[rgba(246,247,251,1)]  shadow-xl lg:w-1/5 md:w-1/2">
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
  </div>
</div>
  <div className="flex text-center items-center mt-5 justify-center">
               <h3 className="text-pink-600  text-[40px] text-center"><MdHorizontalRule />
               </h3>
               <h3 className="text-pink-500 text-[35px] text-center"><MdHorizontalRule />
               </h3>
               <h3 className="text-pink-400  text-[35px] text-center"><MdHorizontalRule />
               </h3>
               <h3 className="text-pink-300  text-[35px] text-center"><MdHorizontalRule />
               </h3>
               </div>
{/* SECTION 2 done */}
{/* Section 3  */}
<div className="max-w-[1177px] mx-auto ">
  <div>
  <div>
    <h4 className="text-center justify-center mt-3 p-5 text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold  " >Leatest Products</h4>
 <ul className="flex flex-wrap gap-8 justify-center">
  <li className="text-[rgba(251,46,134,1)] underline "><Link href="">New Arrival</Link></li>
  <li className="text-[rgba(13,14,67,1)] text-[17px] "><Link href="">Best Seller</Link></li>
  <li className="text-[rgba(13,14,67,1)] text-[17px] "><Link href="">Featured</Link></li>
  <li className="text-[rgba(13,14,67,1)] text-[17px] "><Link href="">Special Offer</Link></li>
  </ul>
 </div>

 <div className="py-10 max-w-[1177px]">
 <div className="text-gray-600  body-font">
      <div className="  container py-2 px-3 mx-auto">
        <div className="flex flex-wrap gap-5 justify-center ">
         

          <div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-gray-100 justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair5} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div>
</div>              
 <div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-white justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair6} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div> 
            </div>
<div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-gray-100 justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair1} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div>
            </div>
          </div>
        </div>
      </div>


      <div className="  container py-2 mt-8 px-3 mx-auto">
        <div className="flex flex-wrap gap-5 justify-center ">
          <div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-gray-100 justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair7} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div>
            </div>
       
            <div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-gray-100 justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair8} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div>
              
            </div>

            <div className=" lg:w-1/4">
            <div className="h-full px-8 py-4 bg-gray-100 justify-center bg-opacity-75  rounded-lg overflow-hidden items-center text-center relative">
           <Image src={chair4} alt=""/>
              </div> 
              <div className="bg-white flex mt-1 justify-between">
<h6 className="font-Josefin Sans text-[13px] font-bold ">Comfort Handy Craft</h6>
<div className="flex  gap-2">
<h6 className="text-[rgba(13,14,67,1)] text-[12px]">$42.00</h6> <h6 className="text-[rgba(251,46,134,1)] text-[12px]">$65.00</h6>
</div>
           </div>
              
            </div>

          </div>

        </div>
      </div>
{/* section3 done */}

{/* SECTION 4 */}
<div className="max-w-[1177px] mx-auto ">
    <h4 className="text-center justify-center mt-3 p-5 text-[30px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2  " >What Shopex Offer!</h4>

<div className="text-gray-600 body-font">
      <div className="container px-3 py-3  bg-white mx-auto">
    
        <div className="flex flex-wrap gap-4 justify-center">
         
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
</div>
</div>
</div>
{/* SECTION 4 done */}

{/* SECTION 5 */}
<div className="max-w-[1177px] mx-auto ">
    <div className="mt-6 body-font">
      <div className="container mx-auto  flex  p-3 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={sofa}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h4 className="text-start justify-center mt-1 text-[30px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold font-Josefin Sans " >Unique Features Of leatest & Trending Poducts</h4>
          <div className="mt-2">
          <div className="flex gap-2 ">
            <p className="text-red-500 mt-1 text-[20px]"><FaCircle /></p>
          <p className="mb-5 leading-6">
          All frames constructed with hardwood solids and laminates
          </p>
          </div>
          <div className="flex  gap-2">
            <p className="text-blue-500 mt-1 text-[20px]"><FaCircle /></p>
          <p className="mb-5 leading-6">
          Reinforced with double wood dowels, glue, screw - nails corner 
          blocks and machine nails
          </p>
          </div>
          <div className="flex gap-2">
            <p className="text-green-500 mt-1 text-[20px]"><FaCircle /></p>
          <p className="mb-5 leading-6">
          Arms, backs and seats are structurally reinforced
          </p>
          </div>
          </div>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="mt-2 flex gap-5">
              <p className="bg-[rgba(251,46,134,1)] text-[18px] text-white font-Josefin Sans hover:bg-[rgba(242,41,130,2)] px-6 py-3 border-[rgba(251,46,134,1)] rounded-sm ">Add To Cart</p>
             <div className="mt-1">
              <p className="text-[16px] font-bold text-[rgba(47,26,196,1)] gap-3">B&B Italian Sofa </p>
              <p className="text-[14px] text-[rgba(47,26,196,1)] gap-3">$32.00 </p>
              </div>
            </div>
          </div>
          </div>
        </div>
</div>
{/* SECTION 5 DONE */}

{/* Section 6 */}
<div className="bg-white">
  <div className="max-w-[1177px] mx-auto ">
    <div className="p-2">
    <h4 className="text-center justify-center mb-2 mt-3 p-5 text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold" >Trending Products</h4>
  </div>
  
  <div className=" bg-white  body-font">
      <div className="container  mx-auto">
    
        <div className="flex flex-wrap gap-5 justify-center ">
      
        <div className=" shadow-xl lg:w-1/5 md:w-1/3">
            <div className="p-3 h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-[250px] p-5 object-cover object-center mb-4" src={chair9} />
              <div className="w-full p-3 ">
              <h2 className="title-font text-[rgba(21,24,117,1)] text-center text-[20px] font-bold  ">Cantilever chair</h2>
                <div className="flex mb-2 text-center mt-2 items-center justify-center">
                <p className=" text-[17px] mx-3 ">$26.00</p>
                <p className=" text-[14px] mx-3 text-[rgba(21,24,117,1)]">$42.00</p>
          </div>
              </div>
            </div>
          </div>
 <div className="  shadow-xl lg:w-1/5 md:w-1/3">
            <div className="p-3 h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-[250px] p-5 object-cover object-center mb-4" src={chair10} />
              <div className="w-full p-3  ">
              <h2 className="title-font text-[rgba(21,24,117,1)] text-center text-[20px] font-bold  ">Cantilever chair</h2>
                <div className="flex mb-2 text-center mt-2 items-center justify-center">
                <p className=" text-[17px] mx-3 ">$26.00</p>
                <p className=" text-[14px] mx-3 text-[rgba(21,24,117,1)]">$42.00</p>
          </div>
              </div>
            </div>
          </div>
<div className=" shadow-xl lg:w-1/5 md:w-1/3">
            <div className="p-3 h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 mt-2 bg-[rgba(246,247,251,1)] rounded-lg w-[300px] p-5 object-cover object-center mb-4" src={chair11} />
              <div className="w-full p-3  ">
              <h2 className="title-font text-[rgba(21,24,117,1)] text-center text-[20px] font-bold  ">Cantilever chair</h2>
                <div className="flex mb-2 text-center mt-2 items-center justify-center">
                <p className=" text-[17px] mx-3 ">$26.00</p>
                <p className=" text-[14px] mx-3 text-[rgba(21,24,117,1)]">$42.00</p>
          </div>
              </div>
            </div>
     </div>
        <div className="  shadow-2xl lg:w-1/5 md:w-1/3">
            <div className="p-3 h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 mt-7 bg-[rgba(246,247,251,1)] rounded-lg w-[300px] p-1 object-cover object-center mb-4" src={chair8} />
              <div className="w-full p-3  ">
              <h2 className="title-font text-[rgba(21,24,117,1)] text-center text-[20px] font-bold  ">Cantilever chair</h2>
                <div className="flex mb-2 text-center mt-2 items-center justify-center">
                <p className=" text-[17px] mx-3 ">$26.00</p>
                <p className=" text-[14px] mx-3 text-[rgba(21,24,117,1)]">$42.00</p>
          </div>
              </div>
            </div>
          </div> <br />
</div>
        </div>  
      </div>
    </div>
  </div>
  </div>
</div>
    </div>
    </div>
  );
}

export default HeroSection;








