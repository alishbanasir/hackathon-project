
"use client";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <div className="bg-[rgba(126,51,224,1)]">
    {/* section 1 */}
    <div className="max-w-[1177px] mx-auto h-auto bg-[rgba(126,51,224,1)] text-white">
  <div className="flex flex-wrap items-center justify-between max-w-[1177px] mx-auto p-4">
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <p className="text-[16px]"><MdOutlineEmail /></p>
        <p className="text-[16px] font-Josefin Sans  font-semibold  leading-[16px]">mhhasanul@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[16px]"><FaPhoneVolume /></p>
        <p className="text-[16px] font-Josefin Sans font-semibold leading-[16px]">(12345)67890</p>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-1">
        <p className="text-[16px] font-semibold font-Josefin Sans leading-[16px]">English</p>
        <p className="text-[24px]"><RiArrowDropDownLine /></p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[16px] font-semibold font-Josefin Sans leading-[16px]">USD</p>
        <p className="text-[24px]"><RiArrowDropDownLine /></p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[16px] font-semibold font-Josefin Sans leading-[16px]">Login</p>
        <p className="text-[20px]"><CiUser /></p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[16px] font-semibold font-Josefin Sans leading-[16px]">Wishlist</p>
        <p className="text-[20px]"><CiHeart /></p>
      </div>
      <div className="text-[20px]">
        <BsCart />
      </div>
    </div>
  </div>
  </div>
</div>
<div className="flex bg-white">
  <div className="flex flex-wrap justify-between items-center mx-auto p-4 w-full max-w-[1177px]">
    <div className="flex items-center lg:static md:static sm:static">
      
      <p className="text-[rgba(13,14,67,1)] lg:text-[34px] md:text-[34px] sm:text-[24px] font-
Josefin Sans font-bold">
        <Link href="/">Hekto</Link>
      </p>
      <nav className="hidden flex ml-20 lg:flex flex-row gap-4 lg:gap-8 ">
        <Link href="/" className="text-[rgba(251,46,134,1)] flex text-[16px] font-Lato">
          Home <p className=" text-[25px] relative"><RiArrowDropDownLine/></p>
        </Link>
        <Link href="/about" className="text-[rgba(13,14,67,1)]  text-[16px] font-Lato">
          Page
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Products
        </Link>
        <Link href="/blog" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Blog
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Shop
        </Link>
        <Link href="/contactus" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Contact
        </Link>
      </nav>
    </div>
    <button
      className="text-black text-3xl lg:hidden items-end text-right"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      &#9776;
    </button>
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } lg:hidden flex flex-col items-start w-full bg-white z-50`}
    >
      <nav className="flex flex-col gap-4 lg:gap-8 w-full">
        <Link href="" className="text-[rgba(13,14,67,1)]  text-[16px] font-Lato">
          Home
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          About
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Products
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Blog
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Shop
        </Link>
        <Link href="" className="text-[rgba(13,14,67,1)] text-[16px] font-Lato">
          Contact
        </Link>
        <div className="flex mt-4 w-full">
          <input
            type="text"
            className="border border-[rgba(231,230,239,1)] p-2 w-full"
            placeholder="Search..."
          />
          <p className="p-2 bg-[rgba(251,46,134,1)] text-white flex items-center justify-center">
            <CiSearch size={25} />
          </p>
        </div>
      </nav>
    </div>
    <div className="flex items-center ml-auto hidden lg:flex">
      <div className="flex mt-4 lg:mt-0 w-full">
        <input
          type="text"
          className="border border-[rgba(231,230,239,1)] p-2 w-full lg:w-auto"
          placeholder="Search..."
        />
        <p className="p-2 bg-[rgba(251,46,134,1)] text-white flex items-center justify-center">
        <CiSearch size={25} /> 
        </p>
      </div>
    </div>
  </div>
</div>
</div>

)}

























