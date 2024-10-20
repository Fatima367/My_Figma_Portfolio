"use client";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="h-screen w-screen bg-gradient-to-br
       from-[#b7dafd] via-[#f6b5e9] to-[#b7dafd]
          flex flex-col justify-center items-center text-center opacity-90"
      >
        <h1
          className="text-xl md:text-5xl font-bold font-Merienda mt-4
          text-white bg-white bg-opacity-20 rounded-2xl mb-4"
        >
          ABOUT ME
        </h1>
        <div
          className="max-w-4xl w-full md:w-11/12 rounded-3xl shadow-md leading-relaxed 
          md:leading-10 p-4 text-md md:text-xl font-sans tracking-wide bg-gradient-to-bl
           from-[#EBFDFF] via-[#FDE8FF] to-[#EBFDFF] shadow-slate-500 py-3"
        >
          <p className="font-serif font-Merienda">
            "I'm a dedicated Front-End Web Developer with skills in building
            visually attractive, responsive, and user-friendly websites. I work
            with HTML, CSS, JavaScript, and modern frameworks like Next.js and
            React. I also have strong experience with Tailwind CSS for building
            fast, flexible, and scalable UIs. I thrive on turning creative
            concepts into functional and high-performing websites that provide
            seamless user experiences across all devices. I focus on clean,
            maintainable code and improving performance. Whether it's dynamic
            single-page or full websites, I strive to connect design with
            development. Ready to build exceptional web experiences that exceed
            expectations!"
          </p>
        </div>{" "}
        <br />
      </section>
    </div>
  );
};

export default About;
