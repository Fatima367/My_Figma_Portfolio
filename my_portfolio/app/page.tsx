"use client";
import Footer from "@/app/footer/page";
import Link from "next/link";
import Image from "next/image";
import Skills from "./skills/page";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section
        className="min-h-screen flex flex-col justify-center w-screen bg-gradient-to-br
        from-[#a3cefa] via-[#f4abe6] to-[#a3cefa] "
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center container py-4 pb-20
         space-y-6 md:space-y-0 md:space-x-8 mx-auto px-4"
        >
          <div
            className="rounded-full shadow-md w-[250px] h-[250px] md:w-[350px]
             md:h-[330px] bg-cover bg-center hover:shadow-lg hover:shadow-black hover:scale-105 
             transition-all duration-300 bg-white ring-1 ring-[#b3d4f5] shadow-black"
          >
            <Image
              src={"/images/myimage.jpg"}
              alt="profile image"
              height={330}
              width={350}
              className="rounded-full object-cover md:w-[350px] md:h-[330px] sm:w-[250px]
               sm:h-[250px]"
            />
          </div>

          <div
            className="rounded-full shadow-md w-full md:w-[700px]
           h-auto md:h-[350px] bg-cover bg-center hover:shadow-lg p-4
           hover:shadow-black hover:scale-105 transition-all duration-300
           bg-gradient-to-bl from-[#EBFDFF] via-[#FDE8FF] to-[#EBFDFF]
           ring-1 ring-[#ff23cf] shadow-black"
          >
            <div
              className="flex flex-col justify-center items-center text-center md:text-left 
              md:mt-6 md:ml-6 lg:mt-6 lg:ml-6"
            >
              <div
                className="mb-4 text-2xl md:text-4xl font-Merienda font-extrabold
              text-center"
              >
                <span
                  className="text-transparent bg-clip-text bg-[#2172c2]
                "
                >
                  Hello! I'm <br />
                </span>
                <span
                  className="text-transparent bg-clip-text bg-[#ff23cf]
                text-stroke text-stroke-[#3A042C]"
                >
                  FATIMA FAISAL
                </span>
                <span className="text-transparent bg-clip-text bg-[#2172c2]">
                  <br />A Frontend Developer <br />
                </span>
              </div>

              <p className="text-base md:text-lg mb-5 leading-relaxed font-Merienda text-center -ml-2">
                I create responsive, visually appealing interfaces, web
                applications that deliver seamless user experiences.
              </p>

              <div
                className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0
               md:space-x-4 mb-10"
              >
                <Link href="mailto:syraa1234567@gmail.com" target="_blank">
                  <button
                    className="px-6 py-3 rounded-full hover:translate-y-1 w-full md:w-auto 
                    hover:font-bold ring-1 ring-[#3A042C] font-Merienda bg-gradient-to-br
                  from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] shadow-md shadow-black 
                    font-semibold duration-300"
                  >
                    Hire Me
                  </button>
                </Link>

                <button
                  className="px-1 py-1 rounded-full hover:translate-y-1 shadow-md 
                  bg-gradient-to-br from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] 
                 shadow-black ring-1 ring-[#3A042C] duration-300"
                >
                  <Link href={"/projects"}>
                    <span
                      className="flex items-center rounded-full px-5 py-2 hover:font-bold 
                    bg-[#3e0b33] font-medium text-white"
                    >
                      Projects <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}