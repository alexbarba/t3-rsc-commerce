"use client";
import Image from "next/image";
import Logo from "../../../../public/logo.webp";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <header className="grid-4 flex h-16 items-center justify-between bg-slate-600 p-4 shadow-md sm:px-8">
      <Image
        src={Logo}
        alt="Logo"
        className="aspect-square w-10 rounded-full bg-white object-cover p-1"
      />

      <label className="align-center relative flex h-full w-full max-w-md justify-center">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="h-full w-full rounded-md border border-slate-100 bg-slate-700 pl-10 focus:ring-1 focus:ring-slate-50 focus-visible:outline-none"
        />
        <MagnifyingGlassIcon className="absolute inset-y-0 left-2 my-auto h-4 w-4" />
      </label>

      <Link className="p-2" href="/cart">
        <ShoppingBagIcon className="h-6 w-6" />
      </Link>
    </header>
  );
};

export default Header;
