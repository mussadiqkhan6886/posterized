"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { roboto } from "@/lib/fonts/font";
import { menuItems } from "@/lib/constants";

const Header = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Detect scroll to change header color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${roboto.className} hover:bg-white hover:text-black ${openIndex !== null || mobileOpen || scrolled ? "bg-white text-black" : "text-white border-b border-white"} duration-300  w-full z-50 fixed top-0`}>
        <div className="relative z-50">
      <div className="max-w-[1380px] mx-auto flex justify-between items-center px-5 p-4">
        <Link href="/" className="text-2xl font-bold">
          Posterized
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap px-10 items-center justify-center gap-6 gap-y-4">
          {menuItems.map((item, i) => (
            <div key={i} className=" group">
              <button
                onClick={() => toggleMenu(i)}
                className="flex uppercase items-center cursor-pointer gap-1 "
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
  <div className="md:hidden fixed inset-0 top-[64px] bg-white z-50 flex flex-col">
    {/* Scrollable content */}
    <nav className="flex-1 overflow-y-auto p-4 space-y-2 text-black">
      {menuItems.map((item, i) => (
        <div key={i} className="border-b border-black/10">
          <button
            onClick={() => toggleMenu(i)}
            className="flex justify-between w-full items-center py-2"
          >
            <span>{item.title}</span>
            {item.children && <FiChevronDown />}
          </button>

          {item.children && openIndex === i && (
            <div className="flex gap-10 flex-wrap border-b border-black/20 pb-4">
              {item.children.map((sub, j) => (
                <div key={j}>
                  <Link
                    href={sub.href || "#"}
                    className="block font-normal py-1 text-sm"
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
    </nav>

    {/* Fixed icons footer */}
    <div className="flex justify-center items-center gap-8 py-4 border-t border-black/10 text-2xl bg-white sticky bottom-0">
      <FiSearch />
      <FiShoppingBag />
      <FiUser />
    </div>
  </div>
)}

      
      </div>
    </header>
  );
};

export default Header;
