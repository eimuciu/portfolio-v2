'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  return (
    <main>
      <div
        onClick={openMenu}
        className="hidden fixed right-[25px] z-10 bottom-[25px] text-[#2B303A] md:block"
      >
        <MdOutlineRestaurantMenu className="w-[50px] h-[50px]" />
      </div>
      <div className="basis-[20%] invisible text-4xl font-bold py-[10px] px-[20px] md:basis-[100%] md:flex md:justify-center md:relative">
        <Link onClick={closeMenu} href="/">
          eimis.codes
        </Link>
      </div>
      <section className="flex fixed flex-row top-0 w-[100%] z-10 py-[10px] px-[20px] bg-[#2B303A] text-white md:flex-col md:px-[10px]">
        <div className="basis-[20%] text-4xl font-bold md:basis-[100%] md:flex md:justify-center md:relative">
          <Link onClick={closeMenu} href="/">
            eimis.codes
          </Link>
        </div>
        <div
          className={`basis-[80%] gap-x-[30px] flex justify-center items-center text-xl md:basis-[100%] md:pt-[15px] md:pb-[15px] md:text-lg	md:text-base md:absolute md:bg-[#2B303A] md:left-0 md:top-[100%] md:w-[100%] md:gap-y-[15px] md:z-10 md:${
            showMenu ? 'flex-col' : 'hidden'
          }`}
        >
          <Link onClick={closeMenu} className="" href="/">
            Home
          </Link>
          <Link onClick={closeMenu} className="" href="/about">
            About
          </Link>
          <Link onClick={closeMenu} className="" href="/stack">
            Stack
          </Link>
          <Link onClick={closeMenu} className="" href="/projects">
            Projects
          </Link>
          <Link onClick={closeMenu} className="" href="/contacts">
            Contacts
          </Link>
        </div>
      </section>
    </main>
  );
}
