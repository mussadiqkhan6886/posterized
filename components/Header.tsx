"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { menuItems } from "@/lib/fonts/constants";
import { roboto } from "@/lib/fonts/font";

const Header = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header className={`${roboto.className} hover:bg-white hover:text-black ${openIndex !== null || mobileOpen ? "bg-white text-black" : "text-white border-b border-white"} duration-300  w-full  fixed top-0`}>
        <div className="relative">
      <div className="max-w-[1380px] mx-auto flex justify-between items-center px-5 p-4">
        <Link href="/" className="text-2xl font-bold">
          Posterized
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap px-10 items-center justify-center gap-4">
          {menuItems.map((item, i) => (
            <div key={i} className=" group">
              <button
                onClick={() => toggleMenu(i)}
                className="flex items-center cursor-pointer gap-1 "
              >
                {item.title}
                {item.children && <FiChevronDown size={14} />}
              </button>

              {item.children && openIndex === i && (
                <div className="absolute opacityHeader left-0 top-15  w-full text-font bg-white pt-6 flex gap-16 pb-10  p-4 z-50 px-10 ">
                  {item.children.map((sub, j) => (
                    <div key={j}>
                      <Link
                        href={sub.href || "#"}
                        className="block py-2 text-black font-semibold border-b border-gray-400/50 mb-3"
                      >
                        {sub.title}
                      </Link>

                      {/* Sub-children */}
                      {sub.children && (
                        <div className="">
                          {sub.children.map((child, k) => (
                            <Link
                              key={k}
                              href={child.href}
                              className="block text-sm py-1 "
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6">
            <FiSearch />
            <FiShoppingBag />
            <FiUser />
        </div>
         {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden opacityHeader min-h-screen bg-white  text-black p-4 space-y-2">
          {menuItems.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggleMenu(i)}
                className="flex justify-between w-full items-center py-2"
              >
                <span >{item.title}</span>
                {item.children && <FiChevronDown />}
              </button>
              {item.children && openIndex === i && (
                <div className="flex gap-10 flex-wrap border-b border-black/20">
                  {item.children.map((sub, j) => (
                    <div key={j}>
                      <Link
                        href={sub.href || "#"}
                        className="block font-normal py-1 text-sm "
                      >
                        {sub.title}
                      </Link>
                      {sub.children && (
                        <div className="text-font">
                          {sub.children.map((child, k) => (
                            <Link
                              key={k}
                              href={child.href}
                              className="block text-xs py-1"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          ))}
          <div className="md:hidden flex mt-20 items-center gap-6">
            <FiSearch />
            <FiShoppingBag />
            <FiUser />
        </div>
        </nav>
      )}
      
      </div>
    </header>
  );
};

export default Header;
