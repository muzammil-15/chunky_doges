import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="relative bg-pudgy-coral border-t-4 border-black py-16 px-4 lg:px-[173px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-[1425px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-10 lg:w-1/2 z-10">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/055e033148e3e75914e63d8b8b77444174f40785?width=1038"
            alt="Pudgy Penguins"
            className="w-full max-w-[519px]"
          />
          <div className="flex flex-col gap-5">
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              Welcome to the world of Pudgy Penguins. a web3-
              <br />
              born brand that fosters creativity, freedom, and
              <br />
              community.
            </p>
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              The Pudgy Penguins brand produces content,
              <br />
              merchandise, toys, and digital collectables. We
              <br />
              believe in the power of play and imagination, and
              <br />
              we're committed to helping you unlock your inner
              <br />
              child.
            </p>
            <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
              It's a very cold place but you'll be warm with your
              <br />
              new favorite penguin family!
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
