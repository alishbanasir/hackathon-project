
import chair19 from "../cardimage/chair19.png";
import chair20 from "../cardimage/chair20.png";
import chair21 from "../cardimage/chair21.png";
import bag1 from "../cardimage/bag1.png";
import headphone from "../cardimage/headphone.png";
import headphone2 from "../cardimage/headphone2.png";
import watch from "../cardimage/watch.png";
import watch2 from "../cardimage/watch2.png";
import watch1 from "../cardimage/watch3.png";
import sofa2 from "../cardimage/sofa2.png";
import company from "../cardimage/company.png";
import camra from "../cardimage/camra1.png";
import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { client } from "@/sanity/lib/client";


export default async function Shop() {
  const query = `*[_type=="product"]{
     name,
     category,
     price,
     description,
     discountPercentage,
     stockLevel,
     isFeaturedProduct,
     image
}`;
const product = await client.fetch(query);
console.log(product, product.length);

    return (
<div>
<div className="bg-white">
  <div className="max-w-[1177px] mx-auto ">
    <div className="container mx-auto justify-between">
    <div className=" mt-8 flex flex-wrap justify-around ">
   <div>
    <h3 className="text-[rgba(21,24,117,1)] font-extrabold text-[20px] ">Ecommerce Acceories & Fashion item </h3>
    <p className="text-gray-500 text-[16px] font-normal ">About 9,620 results (0.62 seconds)</p>
   </div>
   <div>
    <div className="flex gap-5 flex-wrap justify-center">
        <div className="flex gap-1">
        <p className="text-gray-500 text-[16px]">Per Page</p>
        <p className="text-white border px-2 border-1px border-gray-400">helo</p>
        </div>
        <div className="flex gap-1">
        <p className="text-gray-500 text-[16px]">Sort By</p>
        <div className="flex border px-2 border-gray-400">
        <p className="text-gray-300 text-[16px]">Best Match</p>
              <p className="text-[20px] text-gray-300"><RiArrowDropDownLine /></p>
              </div>
        </div>
        <div className="flex gap-1">
        <p className="text-gray-500 text-[17px]">View</p>
        <div className="flex gap-1">
        <p className="text-[20px] mt-1 text-[rgba(21,24,117,1)]"><FiGrid /></p>
              <p className="text-[rgba(21,24,117,1)] mt-1 text-[20px] "><FiAlignJustify /></p>
              <p className="text-white border px-8 border-gray-400">helo</p>
              </div>
        </div>
    </div>
   </div>
  </div>

{/* step1 */}
  <div className="">
  <div className="text-gray-600 mt-10 body-font">
      <div className="container py-2 px-3 bg-white mx-auto">
    
      <div className="mt-8">
        <div className="flex flex-wrap gap-6 justify-center ">
          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={chair19} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Vel elit euismod</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={chair20} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Ultricies condimentum imperdiet</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={chair21} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Vitae suspendisse sed</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={bag1} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Sed at fermentum</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />
          </div></div>

{/* step2 */}
<div className="mt-10">
          <div className="flex flex-wrap gap-6 justify-center ">
          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={watch} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Fusce pellentesque at</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={watch2} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Vestibulum magna laoreet</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={headphone} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Sollicitudin amet orci</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={sofa2} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Ultrices mauris sit</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />
          </div></div>

{/* step 3 */}
<div className="mt-10">
          <div className="flex flex-wrap gap-6  justify-center ">
          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={watch1} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Pellentesque condimentum ac</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={camra} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] "> Cras scelerisque velit</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={headphone2} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Lectus vulputate faucibus</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div><br />

          <div className=" lg:w-1/5 md:w-1/2">
            <div className="h-full  flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 bg-[rgba(246,247,251,1)] rounded-lg w-full h-56 p-5 object-cover object-center mb-4" src={bag1} />
              <div className="w-full  bg-white ">
              <h2 className="title-font font-bold text-[20px] mt-3 text-[rgba(21,24,117,1)] ">Purus risus, ut</h2>
                <div className="flex text-center gap-2 mt-2 items-center justify-center">
               
                <h3 className="text-orange-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-pink-500 text-[10px] text-center"><FaCircle />
                </h3>
                <h3 className="text-purple-500 text-[10px] text-center"><FaCircle />
                </h3></div>
                <div className="flex gap-8 mt-3 justify-center">
                <p className=" text-[18px] text-[rgba(21,24,117,1)]">$26.00 </p>
                <p className=" text-[18px] text-[rgba(251,46,134,1)]">$42.00</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <br />
          </div>
</div>
      </div>
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
    )
}