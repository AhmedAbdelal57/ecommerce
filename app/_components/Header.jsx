"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
//import { useUser } from "@clerk/nextjs";

export default function Header() {
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get("userExists");
    console.log(user);
  }, [router]);
  const urlParams = new URLSearchParams(window.location.search);
  const user = urlParams.get("userExists");
  console.log(user);

  return (
    <header className="bg-white h-[70px]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="h-16 flex items-center gap-0 text-sm">
              <li className="py-5 px-2 hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition  hover:text-gray-500/75 "
                  href="/"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li className="py-5 px-2  hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Pages{" "}
                </a>
              </li>

              <li className="py-5 px-2 hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Products{" "}
                </a>
              </li>

              <li className="py-5 px-2 hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>

              <li className="py-5 px-2 hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Shop{" "}
                </a>
              </li>

              <li className="py-5 px-2 hover:bg-primary-opicity ">
                <a
                  className=" text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Contact US{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-hov-btn"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-white hover:bg-hov-btn sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-hov-btn md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
