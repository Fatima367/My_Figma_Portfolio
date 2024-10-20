"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import React from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-screen z-10 p-2 pb-0 bg-gradient-to-tr from-[#EBFDFF] via-[#FDE8FF] to-[#EBFDFF]">
        <div className="justify-between px-2 lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-4 md:block">
              <Link
                href="/"
                className="text-2xl md:text-3xl pl-1 font-Poppins font-semibold"
              >
                <span
                  className="font-Merienda font-extrabold mt-3 mb-0 text-[#b62bc3]
                text-stroke text-stroke-[#86198f]"
                >
                  F
                </span>
                <span
                  className=" font-Merienda font-extrabold mt-5 mb-0 text-[#b62bc3]
                text-stroke-thin text-stroke-[#86198f]"
                >
                  F
                </span>
              </Link>

              {/* FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className=" absolute cursor-pointer top-[1rem] 
                  right-[1rem] w-[2rem] h-[1rem]"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="text-xl " />
                  ) : (
                    <Bars3Icon className="text-xl " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mx-auto ">
                <li
                  className="pb-5 text-lg md:text-sm font-bold font-Merienda 
                 hover:font-extrabold py-2 md:px-4 text-center hover:text-[#852470] "
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li
                  className="pb-5 text-lg md:text-sm font-Merienda font-bold hover:font-extrabold
                 py-2 md:px-4 text-center hover:text-[#852470]"
                >
                  <Link href="./skills" onClick={() => setNavbar(!navbar)}>
                    SKILLS
                  </Link>
                </li>
                <li
                  className="relative group pb-5 text-lg md:text-sm font-bold font-Merienda
                 hover:font-extrabold py-2 md:px-4 text-center hover:text-[#852470]"
                >
                  <Link href="./projects" onClick={() => setNavbar(!navbar)}>
                    PROJECTS
                  </Link>

                  <ul
                    className="absolute hidden group-hover:block mt-2 w-40 text-left
                  rounded-lg shadow-lg bg-gradient-to-tr from-[#EBFDFF] via-[#FDE8FF] to-[#EBFDFF]"
                  >
                    <li className="px-4 py-2 font-bold hover:font-extrabold hover:text-[#852470]">
                      <Link href="/projects#hackathon">Hackathons</Link>
                    </li>
                    <li className="px-4 py-2 font-bold hover:font-extrabold hover:text-[#852470]">
                      <Link href="/projects#nextjs">NextJs Projects</Link>
                    </li>
                    <li className="px-4 py-2 font-bold hover:font-extrabold hover:text-[#852470]">
                      <Link href="/projects#ts-node">
                        Typescript-Node Projects
                      </Link>
                    </li>
                    <li className="px-4 py-2 font-bold hover:font-extrabold hover:text-[#852470]">
                      <Link href="/projects#html,css&js">
                        HTML,CSS & JS Project
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="pb-5 text-lg md:text-sm font-Merienda font-bold hover:font-extrabold
               py-2 md:px-4 text-center hover:text-[#852470]"
                >
                  <Link href="./about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li
                  className="pb-5 text-lg md:text-sm font-bold font-Merienda hover:font-extrabold
                  py-2 md:px-4 text-center hover:text-[#852470]"
                >
                  <Link href="./contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
