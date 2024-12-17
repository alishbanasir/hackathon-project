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
import chair12 from "../cardimage/chair12.png";
import chair13 from "../cardimage/chair13.png";
import chair14 from "../cardimage/chair14.png";
 import clock from "../cardimage/clock.png";
 import draws from "../cardimage/draws.png";
 import mainchair from "../cardimage/mainchair.png";
 import chair15 from "../cardimage/chair15.png";
 import chair16 from "../cardimage/chair16.png";
 import chair17 from "../cardimage/chair17.png";
 import chair18 from "../cardimage/chair18.png";
 import background from "../cardimage/background.png";
 import company from "../cardimage/company.png";
 import frame1 from "../cardimage/frame1.png";
 import frame2 from "../cardimage/Frame2.png";
 import frame3 from "../cardimage/frame3.png";
 import { FaPenNib } from "react-icons/fa";
 import { FaRegCalendarAlt } from "react-icons/fa";
 import { TiTick } from "react-icons/ti";
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
            href="/shop"
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
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2 text-[rgba(21,24,117,1)]" >Featured Products</h4>
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
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Leatest Products</h4>
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
caption title text-[rgba(26, 11, 91, 1)] font-extrabold mb-2 text-[rgba(21,24,117,1)] " >What Shopex Offer!</h4>

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
caption title font-extrabold font-Josefin Sans  text-[rgba(21,24,117,1)] " >Unique Features Of leatest & Trending Poducts</h4>
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
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Trending Products</h4>
  </div>
  <div className="bg-white  body-font">
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
{/* Section 6 Done */}



{/* SECTION 7  */}
    <div className="max-w-[1177px] mx-auto ">
    <div className=" bg-white  body-font">
    <div className="container mt-10 mx-auto">
    <div className="flex flex-wrap gap-10  justify-center ">
<div className="lg:w-1/4  bg-pink-100">
<div className="p-4 bg-pink-100">
<h3 className="text-[rgba(21,24,117,1)] bg-pink-100 text-[22px] font-bold ">23% off in all products</h3>
<p className="text-[rgba(251,46,134,1)] bg-pink-100 underline mt-2 text-[16px]"> <Link href="/shop">Shop Now</Link></p>
<Image src={clock} width={190} className= " bg-pink-100 mx-10 " alt=""/>
</div>
</div>
<div className="lg:w-1/4  bg-slate-100">
<div className="p-4 bg-slate-100">
<h3 className="text-[rgba(21,24,117,1)] bg-slate-100 text-[22px] font-bold ">23% off in all products</h3>
<p className="text-[rgba(251,46,134,1)] bg-slate-100 underline mt-3 text-[16px]"> <Link href="/shop">View Collection</Link></p>
<Image src={draws} width={200} className= " mt-10 bg-slate-100 mx-5" alt=""/>
</div>
</div>

<div className="lg:w-1/4 p-5">
    <div className="flex mt-1 bg-white">
  <Image src={chair12} className= "p-2 bg-slate-200" alt=""/>
  <p className="text-[rgba(21,24,117,1)] bg-white mx-3 mt-3 text-[14px] font-bold">Executive Seat chair <br />$32.00</p>
 </div>

 <div className="flex mt-4 bg-white">
  <Image src={chair13} className= "p-2 bg-slate-200" alt=""/>
  <p className="text-[rgba(21,24,117,1)] bg-white mx-3 mt-3 text-[14px] font-bold">Executive Seat chair <br />$32.00</p>
 </div>

 <div className="flex mt-4 bg-white">
  <Image src={chair14} className= "p-2 bg-slate-200" alt=""/>
  <p className="text-[rgba(21,24,117,1)] bg-white mx-3 mt-3 text-[14px] font-bold">Executive Seat chair <br />$32.00</p>
 </div>
 </div>
 </div>
  </div>
</div>
</div>
{/* Section 7 Done */}


{/* Section 8 */}
<div className="max-w-[1177px] mx-auto ">
    <div className=" bg-white  body-font">
    <div className="container mt-10 mx-auto">
    <h4 className="text-center justify-center mb-2 mt-3 p-5 text-[28px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Discount Item</h4>
 <ul className="flex flex-wrap gap-5 justify-center">
  <li className="text-[rgba(251,46,134,1)] text-[19px] underline flex"><Link href="">Wood Chair</Link><p className="text-[7px] top-3 mx-2 relative text-[rgba(251,46,134,1)]"><FaCircle /></p></li>
  <li className="text-[rgba(13,14,67,1)] text-[19px] "><Link href="">Plastic Chair</Link></li>
  <li className="text-[rgba(13,14,67,1)] text-[19px] "><Link href="">Sofa Colletion</Link></li>
  </ul>
<div className="max-w-[1177px] mx-auto px-4">
  <div className="bg-white body-font">
    <div className="container mt-10 mx-auto">
      <div className="flex flex-wrap justify-center items-center">
        <div className=" lg:w-1/2 mb-6 lg:mb-0">
          <h3 className="text-[33px] font-extrabold text-[rgba(13,14,67,1)] text-center lg:text-left">
            20% Discount On All Products
          </h3>
          <p className="text-[16px] mt-3 text-[rgba(251,46,134,1)] font-bold  text-center lg:text-left lg:w-[80%]">Eams Sofa Compact</p>
          <p className="text-[17px] mt-5 leading-7 text-gray-700 font-normal  text-center lg:text-left lg:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="flex flex-wrap justify-center  mt-4">
            <div className="flex items-center  sm:mt-0 mt-2 sm:w-1/2 ">
              <p className="text-[20px] text-gray-800">
                <TiTick />
              </p>
              <p className="text-[18px] font-normal mx-2">Material expose like metals</p>
            </div>
            <div className="flex items-center  sm:w-1/2 mt-2 sm:mt-0">
              <p className="text-[20px] text-gray-800">
                <TiTick />
              </p>
              <p className="text-[18px] font-normal mx-2">Material expose like metals</p>
            </div>
            <div className="flex items-center  sm:w-1/2 mt-2">
              <p className="text-[20px] text-gray-800">
                <TiTick />
              </p>
              <p className="text-[18px] font-normal mx-2">Material expose like metals</p>
            </div>
            <div className="flex items-center sm:w-1/2 mt-2">
              <p className="text-[20px] text-gray-800">
                <TiTick />
              </p>
              <p className="text-[18px] font-normal mx-2">Material expose like metals</p>
            </div>
          </div>
          <p className="bg-[rgba(251,46,134,1)] sm:w-full  lg:w-1/4 text-[14px] text-white font-Josefin Sans hover:bg-[rgba(242,41,130,2)] text-center mt-5 px-8 py-3 border-[rgba(251,46,134,1)] rounded-sm "> <Link href="/shop">Shop Now</Link></p>
        </div>
        <div className="lg:w-1/3 "> 
        <div className="">
          <Image
            src={mainchair}
            alt="Main Chair"
            className="w-full h-full max-w-sm   bg-pink-100 rounded-full lg:max-w-md"
          />
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</div>
</div>
{/* Section 8 Done */}


{/* Section 9 */}
<div className="max-w-[1177px] mx-auto ">
    <div className=" bg-white  body-font">
    <div className="container mt-10 mx-auto">
    <h4 className="text-center justify-center mb-2 mt-3 p-5 text-[28px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Top Categories</h4>
<div className="flex flex-wrap gap-5 w-full justify-center mx-auto">
<div className="lg:w-1/5 "> 
  <Image src={chair15} className="rounded-full  border-t-gray-200 border-r-gray-200 border-[2px] shadow-md shadow-purple-900 border-l-purple-800 border-b-purple-800  bg-gray-100  p-10" alt=""/>
    <p className="mt-5 text-[16px] font-bold text-center text-[rgba(21,24,117,1)]"> Mini LCW Chair <br />$56.00</p>
</div>
<div className="lg:w-1/5"> 
  <Image src={chair16} className="rounded-full  shadow-2xl shadow-gray-300   bg-gray-100 p-10" alt=""/>
    <p className="mt-5 text-[16px] font-bold text-center text-[rgba(21,24,117,1)]"> Mini LCW Chair <br />$56.00</p>
</div>
<div className="lg:w-1/5 "> 
  <Image src={chair17} className="rounded-full w-full shadow-2xl shadow-gray-300   bg-gray-100 p-8" alt=""/>
    <p className="mt-5 text-[16px] font-bold text-center text-[rgba(21,24,117,1)]"> Mini LCW Chair <br />$56.00</p>
</div>
<div className="lg:w-1/5"> 
  <Image src={chair18} className="rounded-full shadow-2xl shadow-gray-300   bg-gray-100  p-10" alt=""/>
    <p className="mt-5 text-[16px] font-bold text-center text-[rgba(21,24,117,1)]"> Mini LCW Chair <br />$56.00</p>
</div>
</div>
</div>
<div className="flex justify-center mt-16 gap-3">
<p className="text-[8px] text-pink-500 rounded-full bg-pink-500"><FaCircle /></p>
<p className="text-[5px] text-pink-300 rounded-full bg-white border border-pink-500"><FaCircle /></p>
<p className="text-[5px] text-pink-200 rounded-full bg-white border border-pink-500"><FaCircle /></p>
</div>
</div>
</div>
</div>
{/* Section 9 done */}
</div>
</div>


{/* Section 10 */}
<div className="relative mt-5">
  <Image
    src={background}
    className="w-full h-[500px] object-cover"
    alt="Background Image"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h3 className="text-[28px] md:text-[45px] font-extrabold text-[rgba(13,14,67,1)]">
      Get Latest Update By Subscribe
    </h3>
    <h3 className="text-[28px] md:text-[45px] font-extrabold text-[rgba(13,14,67,1)]">
      Our Newsletter
    </h3>
    <div className="mt-5">
      <p className="bg-[rgba(251,46,134,1)] p-3 text-[14px] text-white font-JosefinSans hover:bg-[rgba(242,41,130,1)] px-8 py-3 rounded-sm cursor-pointer">
      <Link href="/shop">Shop Now</Link>
      </p>
    </div>
  </div>
</div>
{/* Section 10 Done */}


{/* Section 11 */}
<div className="max-w-[1177px] mx-auto">
  <div className="bg-white body-font">
    <div className="container mt-10 mx-auto flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <Image
          src={company}
          alt="Company Image"
          className="w-[80%] md:w-[60%] lg:w-[50%] h-auto object-contain"
        />
      </div>
    </div>
  </div>
</div>
{/* Section 11 Done */}



{/* Section 12  */}
<div className="max-w-[1177px] mx-auto ">
    <div className=" bg-white  body-font">
    <div className="container mt-10 mx-auto">
    <h4 className="text-center justify-center mb-2 mt-3 p-5 text-[28px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Leatest Blog</h4>
<div className="flex flex-wrap gap-10 justify-center mt-10">

<div className="lg:w-1/4">
  <Image src={frame1} className="w-full" alt=""/>
  <div className="flex mt-5 gap-10">
    <div className="flex  gap-2">
    <p className="text-[rgba(251,46,134,1)] text-[15px] mt-1"><FaPenNib  /></p>
      <p className="text-[rgba(21,24,117,1)] text-[18px] ">SaberAli</p>
      </div>
    <div className="flex  gap-2">
    <p className="text-[#ce9d42] text-[15px] mt-1"><FaRegCalendarAlt /></p>
    <p className="text-[rgba(21,24,117,1)] text-[18px]">21 August,2020</p>
    </div>
  </div>

<h4 className="text-[20px] font-bold mt-3 text-[rgba(21,24,117,1)]">Top esssential Trends in 2021</h4>
<p className="text-[15px] w-full font-normal mt-3 text-gray-500">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<p className="text-[18px] underline font-normal mt-3 text-[rgba(21,24,117,1)]">Read More</p>
</div>

<div className="lg:w-1/4">
  <Image src={frame2} className="w-full" alt=""/>
  <div className="flex mt-5 gap-10">
    <div className="flex  gap-2">
    <p className="text-[rgba(251,46,134,1)] text-[15px] mt-1"><FaPenNib  /></p>
      <p className="text-[rgba(21,24,117,1)] text-[18px] ">SaberAli</p>
      </div>
    <div className="flex  gap-2">
    <p className="text-[#ce9d42] text-[15px] mt-1"><FaRegCalendarAlt /></p>
    <p className="text-[rgba(21,24,117,1)] text-[18px]">21 August,2020</p>
    </div>
  </div>

<h4 className="text-[20px] font-bold mt-3 text-[rgba(251,46,134,1)]">Top esssential Trends in 2021</h4>
<p className="text-[15px] w-full font-normal mt-3 text-gray-500">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<p className="text-[18px] underline font-normal mt-3 text-[rgba(251,46,134,1)]">Read More</p>
</div>

<div className="lg:w-1/4 ">
  <Image src={frame3} className="w-full rounded-md" alt=""/>
  <div className="flex mt-5 gap-10">
    <div className="flex  gap-2">
    <p className="text-[rgba(251,46,134,1)] text-[15px] mt-1"><FaPenNib  /></p>
      <p className="text-[rgba(21,24,117,1)] text-[18px] ">SaberAli</p>
      </div>
    <div className="flex  gap-2">
    <p className="text-[#ce9d42] text-[15px] mt-1"><FaRegCalendarAlt /></p>
    <p className="text-[rgba(21,24,117,1)] text-[18px]">21 August,2020</p>
    </div>
  </div>
<h4 className="text-[20px] font-bold mt-3 text-[rgba(21,24,117,1)]">Top esssential Trends in 2021</h4>
<p className="text-[15px] w-full font-normal mt-3 text-gray-500">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<p className="text-[18px] underline font-normal mt-3 text-[rgba(21,24,117,1)]">Read More</p>
</div>
</div>
</div>
  </div>
</div>
{/* Section 12 Done */}
</div>
  );
}
export default HeroSection;

















































