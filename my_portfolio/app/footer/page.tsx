import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#610f4f] text-white py-10 w-screen">
      <div className="container mx-auto px-4 font-Merienda">

        <div className="flex flex-col lg:flex-row justify-between lg:space-x-2">

          <div className="mb-8 lg:mb-0">
            <Link href={"/projects"}>
            <h3 className="font-bold text-xl mb-4 hover:border-b">Projects</h3>
            </Link>
            <ul>
              <li className="mb-2 hover:border-b ">
                <Link href="/projects#hackathon">Hackathon Project</Link>
              </li>
              <li className="mb-2 hover:border-b">
                <Link href="/projects#nextjs">Next.Js Projects</Link>
              </li>
              <li className="mb-2 hover:border-b">
                <Link href="/projects#ts-node">Typescript-Node Projects</Link>
              </li>
              <li className="mb-2 hover:border-b">
                <Link href="/projects#html,css&js">HTML, CSS & JS Project</Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <Link href={"/contact"}>
            <h3 className="font-bold text-xl mb-4 hover:border-b">Contact</h3>
            </Link>
            <ul>
              <li className="mb-2 hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2 hover:border-b">
                <Link href="/about">About</Link>
              </li>
              <li className="mb-2 hover:border-b">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <Link href={"/skills"}>
            <h3 className="flex font-bold text-xl mb-4 hover:border-b">
              Skills <ArrowUpRight className="w-5 h-5" />
              </h3>
            </Link>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold text-xl mb-4"></h3>
            <div className="flex">
              
            </div>
            <div className="flex space-x-4 mt-4 -ml-11 mr-10">
              <Link href="https://www.linkedin.com/in/fatima-faisal-7086b330a/?trk=opento_sprofile_topcard">
                <FaLinkedin className="text-2xl hover:text-blue-400 hover:scale-125" />
              </Link>
              <Link href='https://discord.com/channels/@me'>
              <FaDiscord className="text-2xl hover:text-blue-400 hover:scale-125" />
              </Link>
              
              
              
            </div>
            <p className="mt-2"></p>
            <p></p>
          </div>
        </div>

        <div className="border-t border-[#FDE8FF] my-4"></div>

<div className="flex flex-col items-center justify-center text-center">
  <div className="mb-4">
    <p className="font-extrabold text-4xl">FF</p>
    <p className="text-sm font-Poppins">&copy;Fatima Faisal's portfolio 2024 | All rights reserved.</p>
  </div>
</div>

      </div>
    </footer>
  );
}
