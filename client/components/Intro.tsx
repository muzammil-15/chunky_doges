import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="relative bg-pudgy-coral border-t-4 border-black py-16 px-4 lg:px-[173px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-[1425px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-10 lg:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            >
               <h2
            className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold uppercase text-left tracking-tight leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            chunky doges
          </h2>
            </motion.div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              Welcome to the world of Chunky Doge. a web3-
              <br />
              powered meme empire celebrating fun, freedom, and
              <br />
              community.
            </p>
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              The Chunky Doge brand brings you memes,
              <br />
              collectibles, merch, and digital adventures. We
              <br />
              believe in the power of laughter and imagination, and
              <br />
              we're here to spread chunky joy across the internet.
            </p>
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              The world might be crazy, but you'll stay comfy with your
              <br />
              new favorite doge family!
            </p>
          </div>
        </div>

        {/* Right Penguins */}
        <div className="relative lg:w-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9a3a2308e81852af57217801e86d284c564c35ec?width=1000"
            alt=""
            className="absolute -left-32 top-0 w-[500px] h-[500px] lg:block hidden"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a37d2edebf5f78eb59caa7eb7e735c0f89a53aca?width=640"
            alt=""
            className="absolute left-[290px] top-[191px] w-[320px] h-[320px] lg:block hidden"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/47296227da68974851d8e10bc0b3840f26c586b1?width=440"
            alt=""
            className="absolute right-0 top-[296px] w-[220px] h-[220px] lg:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
