"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <div>
      <div className="flex xm:h-[34px] lg:h-[38px] text-white bg-[#2A254B] justify-center items-center">
        <div className="flex items-center text-white xm:text-[10px] lg:text-[14px] leading-[16.2px] font-normal gap-1.5">
          <span>
            <Image src="/truck2.svg" alt="truck" width={16} height={16} />
          </span>
          <p>Free delivery on all orders over £50 with code easter checkout</p>
        </div>
      </div>

      <header className="flex justify-between items-center text-black xm:h-[56px] p-[16px] ">
        <div className="flex">
          <div className="font-clash">
            <Link href="/" className="logo">
              Avion
            </Link>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex items-center gap-[75.5px]">
            <ul className="xm:hidden md:flex lg:flex gap-[32px] items-center text-black font-satoshi">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/About">About us</Link>
              </li>
              <li>
                <Link href="/pages">Contact</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex xm:gap-2 md:gap-4 items-center ">
            <Link href="#">
              <Image height={24} width={24} src="/Search.svg" alt="search" />
            </Link>
            <Link href="/card">
              <button>
                <Image
                  height={24}
                  width={24}
                  src="/Shopping--cart.svg"
                  alt="shop"
                />
              </button>
            </Link>
            <button>
              <Image
                height={24}
                width={24}
                src="/User--avatar.svg"
                alt="admin"
              />
            </button>
            <div className="xm:flex  lg:hidden">
              <button
                className="xm:flex items-center justify-center"
                onClick={handleNavToggle}
                aria-expanded={navOpen ? "true" : "false"}
                aria-controls="mobile-nav"
              >
                <Image height={20} width={20} src="/Menu2.svg" alt="menu" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          id="mobile-nav"
          className="flex xm:flex-col items-center gap-4 bg-[#F9F9F9] py-4"
        >
          <ul className="text-black text-lg md:flex gap-6 font-satoshi">
            <li>
              <Link href="/Allproducts">All products</Link>
            </li>
            <li>
              <Link href="#">Plant pots</Link>
            </li>
            <li>
              <Link href="#">Ceramics</Link>
            </li>
            <li>
              <Link href="#">Tables</Link>
            </li>
            <li>
              <Link href="#">Chairs</Link>
            </li>
            <li>
              <Link href="#">Crockery</Link>
            </li>
            <li>
              <Link href="#">Tableware</Link>
            </li>
            <li>
              <Link href="#">Cutlery</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="lg:flex xm:hidden items-center h-[64px] bg-[#F9F9F9] gap-[75.5px] justify-center border-t-2">
        <ul className="xm:hidden md:flex lg:flex gap-[32px] items-center text-black font-satoshi">
          <li>
            <Link href="/Allproducts">All products</Link>
          </li>
          <li>
            <Link href="#">Plant pots</Link>
          </li>
          <li>
            <Link href="#">Ceramics</Link>
          </li>
          <li>
            <Link href="#">Tables</Link>
          </li>
          <li>
            <Link href="#">Chairs</Link>
          </li>
          <li>
            <Link href="#">Crockery</Link>
          </li>
          <li>
            <Link href="#">Tableware</Link>
          </li>
          <li>
            <Link href="#">Cutlery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
