import Image from "next/image";
import handbag from "../cardimage/handbag.png";
import handbag2 from "../cardimage/handbag2.png";
import handbag3 from "../cardimage/handbag3.png";
import handbag4 from "../cardimage/handbag4.png";
import iconpic from "../cardimage/iconpic.png";
import boy from "../cardimage/boy.png";
import girl from "../cardimage/girl.png";
import girl1 from "../cardimage/girl1.png";
import girl2 from "../cardimage/girl2.png";
import company from "../cardimage/company.png";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Product(){
    return(
        <div>
           <div className="max-w-[1177px] mx-auto ">
    <div className="mt-6 body-font">
      <div className="container mx-auto shadow-xl bg-white flex  p-3 md:flex-row flex-col items-center">

        <div className="lg:max-w-lg  md:w-1/2 lg:w-1/3 mb-10 md:mb-0">
        <div className="flex justify-center">
            <div className="p-1 ">
        <Image
            className="object-cover mt-1 border border-2px border-white object-center rounded"
            alt="hero"
            width={300}
            src={handbag2}
          /> 
          <Image
            className="object-cover mt-3 border border-2px border-white object-center rounded"
            alt="hero"
            width={300}
            src={handbag3}
          />
          <Image
            className="object-cover mt-3 border border-2px border-white object-center rounded"
            alt="hero"
            width={300}
            src={handbag4}
          />
          </div>
          <div className="">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={900}
            src={handbag}
          /></div>
        </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:w-1/5 lg:pl- md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h4 className="text-start justify-center text-[25px] 
caption title font-bold font-Josefin Sans  text-[rgba(21,24,117,1)] " >Playwood arm chair</h4>
          <div className="mt-2 w-full flex-wrap  md:justify-start justify-center items-end ">
          <div className="flex gap-2 ">
            <p className="text-yellow-600 mt-1 text-[18px]"><FaStar /></p>
            <p className="text-yellow-600 mt-1 text-[18px]"><FaStar /></p>
            <p className="text-yellow-600 mt-1 text-[18px]"><FaStar /></p>
            <p className="text-yellow-600 mt-1 text-[18px]"><FaStar /></p>
            <p className="text-yellow-600 mt-1 text-[18px]"><FaStar /></p>
            <p className=" text-[18px] text-gray-700">(22)</p>
          </div>
          <div className="flex gap-8 mt-3">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
                </div>
                <p className="text-[19px] mt-3 text-gray-900">Color</p>
                <p className="w-full text-[14px] mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus quo quasi nisi inventore obcaecati impedit at tempore sit voluptates, officia repudiandae repellendus animi quidem sunt ipsam, molestiae deleniti? Nemo?</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="mt-4 flex gap-5">
              <p className="text-[rgba(21,24,117,1)] text-[18px]">Add To Cart</p>
              <p className="text-[rgba(21,24,117,1)] text-[18px] mt-1"><CiHeart /></p>
            </div>
          </div>

          <div className="w-full md:justify-start justify-center items-end">
            <p className="text-[rgba(21,24,117,1)] mt-2 text-[14px] font-bold">Categories</p>
            <p className="text-[rgba(21,24,117,1)] mt-2 text-[14px] font-bold">Tags</p>
            <div className="w-full md:justify-start justify-center items-end flex gap-8">
            <p className="text-[rgba(21,24,117,1)] mt-3 text-[14px] font-bold">Share</p>
            <Image src={iconpic} className="w-14 h-4 mt-3" alt=""/>
          </div>
          </div>
        </div>
</div>
</div>
        </div>



{/* section2 */}
<div className="bg-gray-200  ">
        <div className="max-w-[1177px] mt-10 mx-auto ">
         <div className="container mx-auto p-5 ">
            <div className="flex gap-10 mt-5 flex-wrap ">
<p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">Description</p>
<p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">Additional Info</p>
<p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">Reviews</p>
<p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">Video</p>
            </div>
            <div className="mt-8 w-full">
                <p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">Varius tempor</p>
            </div>
            <div className="w-full mt-3">
                <p className="text-gray-400">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className="mt-8 w-full">
                <p className="text-[16px] text-[rgba(21,24,117,1)] font-bold ">More Details</p>
            </div>

<div className="mt-3">
    <div className="w-full flex gap-1 mt-2">
        <p className="text-gray-700 text-[23px]"><BiRightArrowAlt /></p>
        <p className="text-gray-400">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className="w-full flex gap-1 mt-2">
        <p className="text-gray-700 text-[23px]"><BiRightArrowAlt /></p>
        <p className="text-gray-400">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className="w-full flex gap-1 mt-2">
        <p className="text-gray-700 text-[23px]"><BiRightArrowAlt /></p>
        <p className="text-gray-400">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
    <div className="w-full flex gap-1 mt-2">
        <p className="text-gray-700 text-[23px]"><BiRightArrowAlt /></p>
        <p className="text-gray-400">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    </div>
   
</div>
 </div>   
        </div>
        </div>
{/* section2 done */}



{/* section3 */}
        <div className="max-w-[1177px] mt-10 mx-auto ">
        <div className="container mx-auto p-5 ">
        <h4 className="mb-2 mt-3 p-5 text-center  text-[25px] 
caption title text-[rgba(26, 11, 91, 1)] font-extrabold text-[rgba(21,24,117,1)]" >Trending Products</h4>

<div className="flex flex-wrap gap-6 justify-center ">
          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-white w-full h-80  object-cover object-center " src={boy} />
              <div className="w-full  bg-white ">
                <div className="flex  justify-between">
              <h2 className="title-font font-bold text-[15px] mt-3 text-[rgba(21,24,117,1)] ">Man Fashion</h2>
              <div className="flex gap-1 ">
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
              </div>
              </div>
                <div className="flex gap-8 mt-3 ">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
               
                </div>
              </div>
            </div>
          </div><br />








          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-white w-full h-80  object-cover object-center " src={girl} />
              <div className="w-full  bg-white ">
                <div className="flex  justify-between">
              <h2 className="title-font font-bold text-[15px] mt-3 text-[rgba(21,24,117,1)] ">Women Fashion</h2>
              <div className="flex gap-1 ">
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
              </div>
              </div>
                <div className="flex gap-8 mt-3 ">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
               
                </div>
              </div>
            </div>
          </div><br />












          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-white w-full h-80  object-cover object-center " src={girl1} />
              <div className="w-full  bg-white ">
                <div className="flex  justify-between">
              <h2 className="title-font font-bold text-[14px] mt-3 text-[rgba(21,24,117,1)] ">Wolx Dummy Fashion</h2>
              <div className="flex gap-1 ">
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
              </div>
              </div>
                <div className="flex gap-8 mt-3 ">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
               
                </div>
              </div>
            </div>
          </div><br />








          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-white w-full h-80  object-cover object-center " src={girl2} />
              <div className="w-full  bg-white ">
                <div className="flex  justify-between">
              <h2 className="title-font font-bold text-[14px] mt-3 text-[rgba(21,24,117,1)] ">Top Wall Digital Clock</h2>
              <div className="flex gap-1 ">
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
            <p className="text-yellow-600 mt-4 text-[13px]"><FaStar /></p>
              </div>
              </div>
                <div className="flex gap-8 mt-3 ">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
               
                </div>
              </div>
            </div>
          </div><br />

</div>
</div>
</div>


{/* section 5 */}
<div className="max-w-[1177px] mt-10 mx-auto">
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

    )
}