"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 px-5 items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-white py-2">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex gap-x-2 justify-center items-center">
            <Image
              src="/images/profile.png"
              alt="profile"
              width={100}
              height={100}
            className="w-10 h-10 rounded-full"
            />
            <h4 className="text-white">{session?.user?.fullname}</h4>
            <button
              onClick={() => signOut()}
              className="bg-white rounded-md px-3 py-1 text-sm mr-3"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-white rounded-md px-3 py-1 text-sm"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
