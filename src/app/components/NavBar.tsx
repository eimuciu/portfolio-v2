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
      <section className="flex flex-row py-[10px] px-[20px] bg-[#2B303A] text-white md:flex-col md:px-[10px] sm:relative">
        <div className="basis-[20%] text-4xl font-bold md:basis-[100%] md:flex md:justify-center sm:relative">
          <Link onClick={closeMenu} href="/">
            eimis.codes
          </Link>
          <div
            onClick={openMenu}
            className="hidden absolute right-0 top-[150%] text-[#2B303A] sm:block"
          >
            <MdOutlineRestaurantMenu />
          </div>
        </div>
        <div
          className={`basis-[80%] gap-x-[30px] flex justify-center items-center text-xl md:basis-[100%] md:pt-[15px] md:pb-[15px] md:text-lg sm:gap-x-[0px] sm:justify-between	sm:text-base sm:absolute sm:bg-[#2B303A] sm:left-0 sm:top-[100%] sm:w-[100%] sm:gap-y-[15px] sm:z-10 sm:${
            showMenu ? 'flex-col' : 'hidden'
          }`}
        >
          <Link onClick={closeMenu} className="" href="/">
            Home
          </Link>
          <Link onClick={closeMenu} className="" href="/about" prefetch={false}>
            About
          </Link>
          <Link onClick={closeMenu} className="" href="/stack" prefetch={false}>
            Stack
          </Link>
          <Link
            onClick={closeMenu}
            className=""
            href="/projects"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            onClick={closeMenu}
            className=""
            href="/contacts"
            prefetch={false}
          >
            Contacts
          </Link>
        </div>
      </section>
    </main>
  );
}
