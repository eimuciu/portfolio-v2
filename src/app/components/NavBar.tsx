import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <main>
      <section className="flex flex-row py-[10px] px-[20px] bg-[#2B303A] text-white md:flex-col md:px-[10px]">
        <div className="basis-[20%] text-4xl font-bold md:basis-[100%] md:flex md:justify-center ">
          <Link href="/">eimis.codes</Link>
        </div>
        <div className="basis-[80%] gap-x-[30px] flex justify-center items-center text-xl md:basis-[100%] md:pt-[15px] md:pb-[5px] md:text-lg md:gap-x-[0px] md:justify-between	sm:text-base">
          <Link className="" href="/">
            Home
          </Link>
          <Link className="" href="/about" prefetch={false}>
            About
          </Link>
          <Link className="" href="/stack" prefetch={false}>
            Stack
          </Link>
          <Link className="" href="/projects" prefetch={false}>
            Projects
          </Link>
          <Link className="" href="/contacts" prefetch={false}>
            Contacts
          </Link>
        </div>
      </section>
    </main>
  );
}
