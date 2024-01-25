import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

export default function NavBar({ children }: Props): ReactElement {
  return (
    <main className="h-svh">
      <section>
        <div></div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/stack">Stack</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </section>
      {children}
    </main>
  );
}
