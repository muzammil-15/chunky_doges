import React from "react";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <section className="bg-[#E8F6F7] py-16 px-4 lg:px-[173px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1425px] mx-auto mb-12">
        {/* Pudgy Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pudgy-cream flex justify-between flex-col rounded-[25px] border-4 border-pudgy-navy p-6 sm:p-12 relative overflow-hidden"
        >
          <h2
            className="text-[32px] sm:text-[40px] md:text-[60px]  font-extrabold uppercase text-left tracking-tight leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            Chunky Kindness
          </h2>
          <p className="text-pudgy-navy font-inter text-[17px] mt-6 uppercase leading-[29px] mb-8">
            Inspire, Participate, and create with
            <br />
            your fellow chunky.
          </p>
          <button className="group w-max relative">
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
            <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
              <div className="w-[54px] h-[22px] relative">
                <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                  <path
                    d="M16.6646 22.2983H20.6646V20.2983H22.6646V18.2983H24.6646V16.2983H26.6646V14.2983H28.6646V12.2983H30.6646V10.2983H32.6646V8.29834H34.6646V14.2983H38.6646V0.29834L34.6646 0.29834L24.6646 0.29834V4.29834H30.6646V6.29834H28.6646V8.29834H26.6646V10.2983H24.6646V12.2983H22.6646V14.2983H20.6646V16.2983H18.6646V18.2983H16.6646L16.6646 22.2983Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[30px]">
                View Media
              </span>
            </div>
          </button>
          <img
            src="/6.png"
            alt=""
            className="hidden sm:flex absolute bottom-4 right-2 w-[137px] h-auto"
          />
        </motion.div>

        {/* Pudgy Discord */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-pudgy-sky rounded-[25px] flex flex-col justify-between border-4 border-pudgy-navy p-6 sm:p-12 relative overflow-hidden"
        >
          <h2
            className="text-[32px] sm:text-[40px] md:text-[60px]  font-extrabold uppercase text-left tracking-tight leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            Chunky Discord
          </h2>
          <p className="text-pudgy-navy mt-6 font-inter text-[17px] uppercase leading-[29px] mb-8">
            A hangout spot for all Doges.
            <br />
            Join to chill with the Chunky Pack.
          </p>
          <button className="group w-max relative">
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
            <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
              <div className="w-[54px] h-[22px] relative">
                <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                  <path
                    d="M16.6646 22.2983H20.6646V20.2983H22.6646V18.2983H24.6646V16.2983H26.6646V14.2983H28.6646V12.2983H30.6646V10.2983H32.6646V8.29834H34.6646V14.2983H38.6646V0.29834L34.6646 0.29834L24.6646 0.29834V4.29834H30.6646V6.29834H28.6646V8.29834H26.6646V10.2983H24.6646V12.2983H22.6646V14.2983H20.6646V16.2983H18.6646V18.2983H16.6646L16.6646 22.2983Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[30px]">
                Join Now
              </span>
            </div>
          </button>
          <img
            src="/7.png"
            alt=""
            className="hidden sm:flex absolute bottom-4 right-4 w-[137px] h-auto"
          />
        </motion.div>
      </div>

      {/* Pengu Kindness */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-[#FBE9F3] rounded-[25px] flex flex-col justify-between border-4 border-pudgy-navy p-6 sm:p-12 max-w-[1070px] mx-auto relative overflow-hidden"
      >
        <h2
            className="text-[32px] sm:text-[40px] md:text-[60px]  font-extrabold uppercase text-left tracking-tight leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            Chunky <br /> Kindness
          </h2>
        <p className="text-pudgy-navy mt-6 font-inter text-[17px] uppercase leading-[29px] mb-8">
          Find out how Chunky Doge is changing
          <br />
          lives.
        </p>
        <button className="group w-max relative">
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
            <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
              <div className="w-[54px] h-[22px] relative">
                <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                  <path
                    d="M16.6646 22.2983H20.6646V20.2983H22.6646V18.2983H24.6646V16.2983H26.6646V14.2983H28.6646V12.2983H30.6646V10.2983H32.6646V8.29834H34.6646V14.2983H38.6646V0.29834L34.6646 0.29834L24.6646 0.29834V4.29834H30.6646V6.29834H28.6646V8.29834H26.6646V10.2983H24.6646V12.2983H22.6646V14.2983H20.6646V16.2983H18.6646V18.2983H16.6646L16.6646 22.2983Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[30px]">
              kindness
              </span>
            </div>
          </button>
        <img
          src="/lastimg.png"
          alt=""
          className="hidden sm:flex absolute bottom-0 right-4 w-[180px] h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Slider;
