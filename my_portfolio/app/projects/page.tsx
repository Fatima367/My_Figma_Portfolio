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
        id="hackathon"
        className="text-xl md:text-3xl font-Merienda font-extrabold ml-14 mb-4
       text-white"
      >
        HACKATHON PROJECT:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "STATIC RESUME",
            link: "https://interactiveresumehackathonft.vercel.app/",
            img: "/images/projimg1.jpg",
          },
          {
            title: "DYNAMIC RESUME",
            link: "https://hackathon-interactive-resume-generator-by-fatimaf.vercel.app/",
            img: "/images/projimg2.jpg",
          },
          {
            title: "EDITABLE RESUME",
            link: "https://hackathon-interactive-resume-generate-edit-share-by-fatimaf.vercel.app/",
            img: "/images/projimg3.jpg",
          },
          {
            title: "SHARABLE RESUME",
            link: "",
            img: "/images/projimg4.jpg",
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
            <div
              key={index}
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
            title: "MOVIE SEARCH APP",
            link: "",
            description: "",
            img: "/images/projimg5.jpg",
          },
          {
            title: "COUNTDOWN TIMER",
            link: "",
            description: "",
            img: "/images/projimg6.jpg",
          },
          {
            title: "WEATHER APP",
            link: "",
            description: "",
            img: "/images/projimg7.jpg",
          },
          {
            title: "BIRTHDAY WISH APP",
            link: "",
            description: "",
            img: "/images/projimg8.jpg",
          },
          {
            title: "NUMBER GUESSING GAME",
            link: "",
            description: "",
            img: "/images/projimg9.jpg",
          },
          {
            title: "DIGITAL CLOCK APP",
            link: "",
            description: "",
            img: "/images/projimg10.jpg",
          },
          {
            title: "RANDOM JOKE GENERATOR",
            link: "",
            description: "",
            img: "/images/projimg11.jpg",
          },
          {
            title: "COLOR PICKER APP",
            link: "",
            description: "",
            img: "/images/projimg12.jpg",
          },
          {
            title: "PASSWORD GENERATOR APP",
            link: "",
            description: "",
            img: "/images/projimg13.jpg",
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
            <div
              key={index}
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
            title: "ATM PROJECT",
            link: "",
            description: "",
            img: "/images/projimg14.jpg",
          },
          {
            title: "CURRENCY CONVERTER",
            link: "",
            description: "",
            img: "/images/projimg15.jpg",
          },
          {
            title: "NUMBER GUESSING GAME",
            link: "",
            description: "",
            img: "/images/projimg16.jpg",
          },
          {
            title: "SIMPLE CALCULATOR",
            link: "",
            description: "",
            img: "/images/projimg17.jpg",
          },
          {
            title: "TODO LIST",
            link: "",
            description: "",
            img: "/images/projimg18.jpg",
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
            <div
              key={index}
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
            title: "ONLINE CALCULATOR",
            link: "",
            description: "",
            img: "/images/projimg19.jpg",
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
            <div
              key={index}
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
