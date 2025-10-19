import React from "react";
import { motion } from "framer-motion";

const Tiles = () => {
  return (
    <section className="border-t-4 border-black flex flex-col lg:flex-row">
      {/* The Pengu Prophecy */}
      <div className="relative bg-[#FFE0B2] lg:w-1/2 border-r-4 border-black p-12 lg:p-16  min-h-[600px] flex flex-col justify-start sm:justify-between overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[513px]"
        >
          <h2
            className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px]  font-extrabold uppercase text-left tracking-tighter leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            the chunky prophecy
          </h2>

        </motion.div>
        <div className="mt-8 ">
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[28px] mb-8">
            Learn about the chunky lore
          </p>

          <button className="group relative">
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
            <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
              <div className="w-[54px] h-[22px] relative">
                <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                  <path
                    d="M16.4927 22.6445H20.4927V20.6445H22.4927V18.6445H24.4927V16.6445H26.4927V14.6445H28.4927V12.6445H30.4927V10.6445H32.4927V8.64453H34.4927V14.6445H38.4927V0.644531L34.4927 0.644531L24.4927 0.644532V4.64453H30.4927V6.64453H28.4927V8.64453H26.4927V10.6445H24.4927V12.6445H22.4927V14.6445H20.4927V16.6445H18.4927V18.6445H16.4927L16.4927 22.6445Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="font-serif text-[20px] uppercase leading-[25px]">
                Discover
              </span>
            </div>
          </button>
        </div>
        <img
          src="/6.webp"
          alt=""
          className="absolute bottom-[-30px] right-0 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px]"
        />
      </div>

      {/* Shop Toys & Figurines */}
      <div className="relative bg-[#FFDBDB] lg:w-1/2 border p-6 sm:p-12 lg:p-16 min-h-[600px] flex flex-col justify-start sm:justify-between overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[494px]"
        >
          <h2
            className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px]  font-extrabold uppercase text-left tracking-tighter leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            shop toys & figurines
          </h2>
        </motion.div>
        <div className="mt-8">
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[28px] mb-8">
            Start your collection today!
          </p>
          <button className="group relative">
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
            <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
              <div className="w-[54px] h-[22px] relative">
                <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                  <path
                    d="M16.533 22.6445H20.533V20.6445H22.533V18.6445H24.533V16.6445H26.533V14.6445H28.533V12.6445H30.533V10.6445H32.533V8.64453H34.533V14.6445H38.533V0.644531L34.533 0.644531L24.533 0.644532V4.64453H30.533V6.64453H28.533V8.64453H26.533V10.6445H24.533V12.6445H22.533V14.6445H20.533V16.6445H18.533V18.6445H16.533L16.533 22.6445Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="font-serif text-[20px] uppercase leading-[25px]">
                shop now
              </span>
            </div>
          </button>
        </div>
        <img
          src="/7.webp"
          alt=""
          className="absolute bottom-[-30px] right-0 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px]"
        />
      </div>
    </section>
  );
};

export default Tiles;
