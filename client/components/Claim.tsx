import React from "react";
import { motion } from "framer-motion";

const Claim = () => {
  return (
    <section className="relative bg-pudgy-blue-light border-t-4 border-b-4 border-black py-16 px-4 lg:px-[173px]">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2
            className="text-[40px] sm:text-[50px] text-center md:text-[60px] lg:text-[80px] xl:text-[100px]  font-extrabold uppercase tracking-tighter leading-none"
            style={{
              color: "white",
              WebkitTextStroke: "3px black", // outline
              textStroke: "3px black", // fallback
            }}
          >
            lil chunky
          </h2>
      </motion.div>

      {/* Description */}
      <div className="text-center max-w-[773px] mx-auto mb-12">
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          Chunky Doges are 22,222 doges of pure meme energy. They’re cute,
          loyal, and
        </p>
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          absolutely unstoppable when it comes to spreading joy, laughter, and
          chunky
        </p>
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          vibes in the fight against the evil bears of boredom.
        </p>
      </div>

      <img
        src="2.png"
        alt=""
        className="mx-auto w-full max-w-[300px] mb-16"
      />

      {/* Claim Card */}
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-[1034px] mx-auto">
        <div className="relative w-full max-w-[399px] h-[548px] rounded-[25px] border-4 border-black overflow-hidden">
          <img
            src="4.png"
            alt="Pudgy Penguin Card"
            className="absolute inset-0 w-full h-[400px] object-cover"
          />
        </div>

        <div className="flex-1 bg-pudgy-cream rounded-[25px] border-4 border-black p-8 lg:p-12">
          <h3 className="font-serif text-[33px] font-bold uppercase leading-[61px] mb-4">
            Claim free Lil Doges to
            <br />
            vibe with the Chunky
            <br />
            Doges you hold.
          </h3>
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
            Check if your Chunky Doge is still eligible
            <br />
            to claim a Lil Doge
          </p>

          <button className="w-full max-w-[580px] py-6 rounded-[5px] border-4 border-black bg-pudgy-blue-light hover:bg-pudgy-blue-bright transition-colors">
            <span className="text-pudgy-sky font-serif text-[24px] uppercase leading-[48px]">
              CONNECT WALLET
            </span>
          </button>
          <img
            src="1.png"
            alt=""
            className="absolute bottom-14 right-12 w-[130px] h-auto"
          />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="mt-24 bg-pudgy-cream rounded-2xl h-[98px] overflow-hidden relative">
        <motion.div
          className="absolute whitespace-nowrap flex gap-6 h-full items-center px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-pudgy-blue-light font-serif text-[39px] uppercase leading-[63px]"
            >
              X MARKS THE SPOT WHEN THE HORIZON SHINES
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Claim;
