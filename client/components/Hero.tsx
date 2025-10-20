import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[800px] sm:h-[1000px] bg-gradient-to-r  overflow-hidden">
      {/* Background Image */}
      <img
        src="/herobg.jpg"
        alt=""
        className="absolute   left-0 w-full  h-full object-cover "
      />
      <div className="absolute bg-[#0c0d0d3e] w-full h-full left-0 top-0"></div>

      {/* Penguin Scene */}
      <div className="absolute flex items-end justify-center bottom-0 left-1/2  -translate-x-1/2 w-full max-w-[1078px] h-[400px] px-4">
        <img src="/3.webp" alt="" className=" hidden sm:flex bottom-0 left-0 w-[250px] h-auto" />
        <img
          src="/4.webp"
          alt=""
          className="hidden bottom-0 md:flex left-0 w-[250px] h-auto"
        />
        <img
          src="/5.webp"
          alt=""
          className=" bottom-0 left-0 w-[250px] h-auto"
        />
        <img
          src="/6.webp"
          alt=""
          className="hidden bottom-0 lg:flex left-0 w-[250px] h-auto"
        />
      </div>

      {/* Hero Title */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full max-w-[1235px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-auto"
        >
          <h1
            className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-extrabold uppercase text-center tracking-tight leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            THE CHUNKY PACK
          </h1>
        </motion.div>
      </div>

      {/* Subtitle Text */}
      <div className="absolute bottom-[350px] sm:bottom-[420px] left-1/2 -translate-x-1/2 text-center w-full max-w-[658px] px-4">
        <p className="text-white font-inter text-[17px] uppercase leading-[29px]">
          Chunky Doge is a global movement spreading the
        </p>
        <p className="text-white font-inter text-[17px] uppercase leading-[29px]">
          doge spirit, meme culture, and chunky good vibes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
