"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div
      className=" bg-opacity-80 w-screen bg-gradient-to-br
       from-[#b7dafd] via-[#f6b5e9] to-[#b7dafd]"
    >
      <section id="contact" className=" text-center py-10">
        <div className="flex justify-center flex-wrap">
          <h1
            className="font-Merienda text-3xl md:text-5xl font-bold mb-8 text-white
        bg-white bg-opacity-20 rounded-2xl"
          >
            CONTACT ME:
          </h1>
        </div>
        <div className="flex justify-center">
          <form
            className="bg-gradient-to-bl from-[#EBFDFF] via-[#FDE8FF] to-[#EBFDFF]
           p-6 rounded-3xl w-full max-w-lg ring-1 ring-[#ff23cf] shadow-md shadow-black"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-md md:text-xl font-Merienda mb-2 font-bold"
              >
                Enter Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-2xl 
                 text-center ring-1 ring-[#b3d4f5] focus:outline-none"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-md md:text-xl font-Merienda mb-2 font-bold"
              >
                Enter Your Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-2xl text-center 
                ring-1 ring-[#b3d4f5] focus:outline-none"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-md md:text-xl font-Merienda mb-2 font-bold"
              >
                Write Message:
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 rounded-2xl text-center focus:outline-none ring-1 ring-[#b3d4f5]"
                required
                onChange={handleInputChange}
              />
            </div>

            <Link
              href={`mailto:syraa1234567@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`}
            >
              <button
                className="p-2 rounded-xl w-11/12 hover:translate-y-1 shadow-md -mt-2 mb-2
            font-Merienda text-lg font-bold bg-gradient-to-br from-[#b3d4f5] via-[#ffff] to-[#b3d4f5] 
                 shadow-black ring-1 ring-[#949194] duration-300"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;