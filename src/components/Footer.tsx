import React from 'react'
import {FaFacebook} from 'react-icons/fa';
import { RxInstagramLogo } from "react-icons/rx";
import {FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className="mt-5">
        <footer className="text-gray-600 body-font bg-[#E7E4F8]">
  <div className=" mx-auto px-5 py-20 max-w-[1177px] mt-[40px]">
    <div className="flex flex-wrap leading-10 md:text-left text-center order-first">


    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="font-
Josefin Sans font-bold text-black text-[29px] tracking-widest text-lg leading-[
44.53px] mb-5">
        Hekto
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap leading-10 lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 leading-10 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Enter Email Address'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 "
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[rgba(251,46,134,1)] border-0  px-3 focus:outline-none rounded">
            Sign-Up
          </button>
        </div>
        <p className="text-[rgba(138,143,185,1)] leading-6 text-sm mt-2 md:text-left text-center">
        Contact Info
          <br className="lg:block hidden" />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
        Catagories
        </h2>
        <nav className="list-none mb-10">
            <ul>
          <li>
            <a className="  text-[rgba(138,143,185,1)] hover:text-gray-800  ml-6">Laptops & Computers</a></li>
          <li><a className=" text-[rgba(138,143,185,1)] h hover:text-gray-800 ml-6">Cameras & Photography</a></li>
          <li><a className=" text-[rgba(138,143,185,1)] h hover:text-gray-800 ml-6">Smart Phones & Tablets</a></li>
          <li><a className=" text-[rgba(138,143,185,1)] h hover:text-gray-800 ml-6">Video Games & Consoles</a></li>
          <li><a className=" text-[rgba(138,143,185,1)] h hover:text-gray-800 ml-6">Waterproof Headphones</a></li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Customer Care
        </h2>
        <nav className="list-none mb-10"><ul>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">My Account</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Discount</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Returns</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Orders History</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Order Tracking</a></li>
          </ul></nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10"><ul>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Blog</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Browse the Shop</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Category</a></li>
          <li><a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Pre-Built Pages</a></li>
          <li>
            <a className="text-[rgba(138,143,185,1)] hover:text-gray-800">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-[rgba(138,143,185,1)] hover:text-gray-800">WooCommerce Pages</a>
          </li></ul>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-[#E7E4F8]">
    <div className="max-w-[1177px] mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-[rgba(138,143,185,1)] sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        <a
          href="https://twitter.com/abc"
          rel="noopener noreferrer"
          className="text-[rgba(138,143,185,1)] ml-1"
          target="_blank"
        >
          @Right Reserved
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     <div className='text-3xl text-blue-950 '><FaFacebook  /></div> 
      <div className='text-3xl ml-3 text-blue-950'><RxInstagramLogo /></div>
        <div className='text-3xl ml-3 text-blue-950'><FaLinkedin  /></div>

    </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer