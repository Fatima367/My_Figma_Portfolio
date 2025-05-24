"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-screen py-8 bg-gradient-to-br
        from-[#b7dafd] via-[#f6b5e9] to-[#b7dafd]"
    >
      <div className="flex justify-center flex-wrap mb-6">
        <h1
          className="text-3xl md:text-5xl font-Merienda font-bold text-white
         bg-white bg-opacity-20 rounded-2xl
          "
        >
          PROJECTS
        </h1>
      </div>
      <h2
        id="websites"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
       text-white"
      >
        WEBSITES:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 1,
            title: "DYNAMIC BLOG WEBSITE",
            link: "https://milestone-3-blog-web-ft-ff.vercel.app/",
            img: "/images/projimg21.png",
          },
          {
            id: 2,
            title: "MORENT",
            link: "https://marketplace-morent-ft-ff.vercel.app/",
            img: "/images/projimg23.png",
          },
          {
            id: 3,
            title: "RESUME BUILDER",
            link: "https://fatimafs-resume-builder.vercel.app/",
            img: "/images/projimg20.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
              className="h-30 w-72 sm:w-72 hover:shadow-lg hover:shadow-black
      shadow-md shadow-slate-950 rounded-xl transform hover:scale-105
      transition-all duration-200 bg-gradient-to-br
      from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] ring-1 ring-[#c1c2c2]"
            >
              <div className="flex flex-row gap-x-4 items-center p-4">
                <Image
                  src={project.img}
                  alt="Project Thumbnail"
                  height={60}
                  width={60}
                  className="rounded-3xl border h-16 w-16 shadow-md shadow-black flex-shrink-0"
                />

                <Link href={project.link} target="_blank" className="w-full">
                  <p
                    className="text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /> <br />
      <h2
        id="hackathon"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
       text-white"
      >
        HACKATHON PROJECT:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 4,
            title: "STATIC RESUME",
            link: "https://interactiveresumehackathonft.vercel.app/",
            img: "/images/projimg1.jpg",
          },
          {
            id: 5,
            title: "DYNAMIC RESUME",
            link: "https://hackathon-interactive-resume-generator-by-fatimaf.vercel.app/",
            img: "/images/projimg2.jpg",
          },
          {
            id: 6,
            title: "EDITABLE RESUME",
            link: "https://hackathon-interactive-resume-generate-edit-share-by-fatimaf.vercel.app/",
            img: "/images/projimg3.jpg",
          },
          {
            id: 7,
            title: "SHARABLE RESUME",
            link: "https://interactive-download-share-resume-fatimafs.vercel.app/",
            img: "/images/projimg4.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
              className="h-30 w-72 sm:w-72 hover:shadow-lg hover:shadow-black
      shadow-md shadow-slate-950 rounded-xl transform hover:scale-105
      transition-all duration-200 bg-gradient-to-br
      from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] ring-1 ring-[#c1c2c2]"
            >
              <div className="flex flex-row gap-x-4 items-center p-4">
                <Image
                  src={project.img}
                  alt="Project Thumbnail"
                  height={60}
                  width={60}
                  className="rounded-3xl border h-16 w-16 shadow-md shadow-black flex-shrink-0"
                />

                <Link href={project.link} target="_blank" className="w-full">
                  <p
                    className="text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /> <br />
      <h2
        id="nextjs"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
      text-white"
      >
        NEXT.JS PROJECTS:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 8,
            title: "MOVIE SEARCH APP",
            link: "https://movie-search-app-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg5.jpg",
          },
          {
            id: 9,
            title: "PASSWORD GENERATOR APP",
            link: "https://password-generator-app-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg13.jpg",
          },
          {
            id: 10,
            title: "COUNTDOWN TIMER",
            link: "https://countdown-timer-by-fatimafs-theta.vercel.app/",
            description: "",
            img: "/images/projimg6.jpg",
          },
          {
            id: 11,
            title: "BIRTHDAY WISH APP",
            link: "https://birthday-wish-app-by-fatimafs-nextjs-project.vercel.app/",
            description: "",
            img: "/images/projimg8.jpg",
          },
          {
            id: 12,
            title: "NUMBER GUESSING GAME",
            link: "https://number-guessing-game-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg9.jpg",
          },
          {
            id: 13,
            title: "DIGITAL CLOCK APP",
            link: "https://digital-clock-app-by-fatimfs.vercel.app/",
            description: "",
            img: "/images/projimg10.jpg",
          },
          {
            id: 14,
            title: "RANDOM JOKE GENERATOR",
            link: "https://random-joke-generator-app-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg11.jpg",
          },
          {
            id: 15,
            title: "COLOR PICKER APP",
            link: "https://color-picker-app-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg12.jpg",
          },
          {
            id: 16,
            title: "WEATHER APP",
            link: "",
            description: "",
            img: "/images/projimg7.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
              className="h-30 w-72 sm:w-72 hover:shadow-lg hover:shadow-black
      shadow-md shadow-slate-950 rounded-xl transform hover:scale-105
      transition-all duration-200 bg-gradient-to-br
      from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] ring-1 ring-[#c1c2c2]"
            >
              <div className="flex flex-row gap-x-4 items-center p-4">
                <Image
                  src={project.img}
                  alt="Project Thumbnail"
                  height={60}
                  width={60}
                  className="rounded-3xl border h-16 w-16 shadow-md shadow-black flex-shrink-0"
                />

                <Link href={project.link} target="_blank" className="w-full">
                  <p
                    className="text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <br />
      <br />
      <h2
        id="ts-node"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
      text-white"
      >
        TYPESCRIPT-NODE PROJECTS:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 17,
            title: "ATM PROJECT",
            link: "",
            description: "",
            img: "/images/projimg14.jpg",
          },
          {
            id: 18,
            title: "CURRENCY CONVERTER",
            link: "",
            description: "",
            img: "/images/projimg15.jpg",
          },
          {
            id: 19,
            title: "NUMBER GUESSING GAME",
            link: "",
            description: "",
            img: "/images/projimg16.jpg",
          },
          {
            id: 20,
            title: "SIMPLE CALCULATOR",
            link: "",
            description: "",
            img: "/images/projimg17.jpg",
          },
          {
            id: 21,
            title: "TODO LIST",
            link: "",
            description: "",
            img: "/images/projimg18.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
              className="h-30 w-72 sm:w-72 hover:shadow-lg hover:shadow-black
      shadow-md shadow-slate-950 rounded-xl transform hover:scale-105
      transition-all duration-200 bg-gradient-to-br
      from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] ring-1 ring-[#c1c2c2]"
            >
              <div className="flex flex-row gap-x-4 items-center p-4">
                <Image
                  src={project.img}
                  alt="Project Thumbnail"
                  height={60}
                  width={60}
                  className="rounded-3xl border h-16 w-16 shadow-md shadow-black flex-shrink-0"
                />

                <Link href={project.link} target="_blank" className="w-full">
                  <p
                    className="text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <br /> <br />
      <h2
        id="html,css&js"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
      text-white"
      >
        HTML, CSS & JS PROJECT:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 22,
            title: "ONLINE CALCULATOR",
            link: "https://online-calculator-js-html-css-by-fatimafs.vercel.app/",
            description: "",
            img: "/images/projimg19.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
              className="h-30 w-72 sm:w-72 hover:shadow-lg hover:shadow-black
      shadow-md shadow-slate-950 rounded-xl transform hover:scale-105
      transition-all duration-200 bg-gradient-to-br
      from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] ring-1 ring-[#c1c2c2]"
            >
              <div className="flex flex-row gap-x-4 items-center p-4">
                <Image
                  src={project.img}
                  alt="Project Thumbnail"
                  height={60}
                  width={60}
                  className="rounded-3xl border h-16 w-16 shadow-md shadow-black flex-shrink-0"
                />

                <Link href={project.link} target="_blank" className="w-full">
                  <p
                    className="text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <br />
    </section>
  );
};

export default Projects;