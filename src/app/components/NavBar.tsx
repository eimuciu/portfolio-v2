import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

export default function NavBar(): ReactElement {
  return (
    <main>
      <section className="flex flex-row py-[10px] px-[20px] bg-[#2B303A] text-white">
        <div className="basis-[20%] text-4xl font-bold">
          <Link href="/">eimis.codes</Link>
        </div>
        <div className="basis-[80%] flex justify-center items-center text-xl">
          <Link className="mx-[15px]" href="/">
            Home
          </Link>
          <Link className="mx-[15px]" href="/about" prefetch={false}>
            About
          </Link>
          <Link className="mx-[15px]" href="/stack" prefetch={false}>
            Stack
          </Link>
          <Link className="mx-[15px]" href="/projects" prefetch={false}>
            Projects
          </Link>
          <Link className="mx-[15px]" href="/contacts" prefetch={false}>
            Contacts
          </Link>
        </div>
      </section>
    </main>
  );
}
