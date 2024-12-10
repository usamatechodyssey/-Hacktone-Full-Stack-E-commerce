"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TruckIcon } from "@heroicons/react/solid";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <div>
      <div className="flex xm:h-[34px] lg:h-[38px] text-[white] bg-[#2A254B] justify-center items-center">
        <div className="flex items-center text-white xm:text-[10px] lg:text-[14px] leading-[16.2px] font-normal gap-1.5">
          <span>
            <TruckIcon className="h-8 w-8 text-white rounded" />
          </span>
          Free delivery on all orders over £50 with code easter checkout
        </div>
      </div>
      <header className="flex justify-between items-center text-white xm:h-[56px] p-[16px] xm:mx-[0px]">
        <div className="flex gap-4">
          <div className="">
            <a className="logo" href="/">
              Avion
            </a>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex items-center gap-[75.5px] ">
            <ul className="xm:hidden md:flex lg:flex gap-[32px] items-center text-[black]">
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
          <div className="flex xm:gap-2 md:gap-4">
            <button>
              <Image height={24} width={24} src="/Search.svg" alt="search" />
            </button>
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
            <div className="xm:flex md:hidden">
              <button
                className="xm:flex items-center justify-center"
                onClick={handleNavToggle}
              >
                <Image height={16} width={20} src="/Menu2.svg" alt="bar" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {navOpen && (
        <div className="flex flex-col items-center gap-4 bg-[#F9F9F9] py-4">
          <ul className="text-black text-lg">
            <li>
              <Link href="#">All products</Link>
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
      <div className="flex items-center h-[64px] bg-[#F9F9F9] gap-[75.5px] justify-center">
        <ul className="xm:hidden md:flex lg:flex gap-[32px] items-center text-[black]">
          <li>
            <Link href="#">All products</Link>
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
