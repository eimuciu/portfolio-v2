import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

export default function NavBar({ children }: Props): ReactElement {
  return (
    <main className="h-svh">
      <section className="flex flex-row p-[10px] bg-[#2B303A] text-white">
        <div className="w-[20%] text-4xl font-bold	">eimantas.codes</div>
        <div className="w-[60%] flex justify-center items-center text-xl">
          <Link className="mx-[15px]" href="/">
            Home
          </Link>
          <Link className="mx-[15px]" href="/about">
            About
          </Link>
          <Link className="mx-[15px]" href="/stack">
            Stack
          </Link>
          <Link className="mx-[15px]" href="/projects">
            Projects
          </Link>
          <Link className="mx-[15px]" href="/contacts">
            Contacts
          </Link>
        </div>
      </section>
      {children}
    </main>
  );
}
