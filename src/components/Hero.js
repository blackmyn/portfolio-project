import React, { useState } from "react";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl"><span className="text-accent">I</span>van <span className="text-accent">S</span>iarheyenka</h1>

          <p className="py-5">
            Some text in paragraph
          </p>
          <div>
          <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            
          </div>
          <a href="/#projects" className="btn bg-accent border-2 border-[#A68F97] text-white px-6 py-3 mt-5 inline-block hover:bg-[#A68F71]">Don't press me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;