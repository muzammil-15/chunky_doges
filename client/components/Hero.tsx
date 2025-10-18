import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[1000px] bg-gradient-to-r from-[#0179E7] to-[#0086F8]  pt-[137px]  overflow-hidden">
      {/* Background Image */}
      <img
        src="/herobg.jpg"
        alt=""
        className="absolute top-[312px] left-0 w-full  h-[844px] object-cover"
      />

      {/* Penguin Scene */}
      <div className="absolute flex items-end justify-center bottom-0 left-1/2  -translate-x-1/2 w-full max-w-[1078px] h-[400px] px-4">
        <img
          src="/3.png"
          alt=""
          className=" bottom- left-0 w-[250px] h-auto"
        />
        <img
          src="/4.png"
          alt=""
          className=" bottom-0 left-0 w-[250px] h-auto"
        />
        <img
          src="/5.png"
          alt=""
          className=" bottom-0 left-0 w-[250px] h-auto"
        />
        <img
          src="/6.png"
          alt=""
          className=" bottom-0 left-0 w-[250px] h-auto"
        />
      </div>

      {/* Hero Title */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full max-w-[1235px] px-4">
        <motion.svg
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-auto"
          viewBox="0 0 1235 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_6_37"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="3"
            width="1235"
            height="317"
          >
            <path
              d="M1234.95 3.90479H0.25V319.595H1234.95V3.90479Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_6_37)">
            <path
              d="M1047.69 279.825H1137.8V238.235H1094.48V175.85H1125.67V134.26H1094.48V78.806H1137.8V37.2166H1047.69V279.825Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M951.678 279.826H1043.52V238.235H998.467V37.2163H951.678V279.826Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M874.921 241.701V75.3411H876.654C885.319 75.3411 892.25 82.2725 892.25 158.521C892.25 234.769 885.319 241.701 876.654 241.701H874.921ZM828.132 279.825H874.921C913.045 279.825 942.504 250.365 942.504 158.521C942.504 66.6762 913.045 37.217 874.921 37.217H828.132V279.825Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M751.375 241.701V75.3407H753.108C761.773 75.3407 768.705 82.2721 768.705 158.52C768.705 234.769 761.773 241.701 753.108 241.701H751.375ZM704.587 279.825H751.375C789.499 279.825 818.959 250.365 818.959 158.52C818.959 66.6758 789.499 37.2166 751.375 37.2166H704.587V279.825Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M636.494 285.024C667.686 285.024 691.948 260.763 691.948 201.844V37.2163H645.159V212.241C645.159 243.434 641.692 246.9 636.494 246.9C631.295 246.9 627.83 243.434 627.83 212.241V37.2163H581.04V201.844C581.04 260.763 605.301 285.024 636.494 285.024Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M457.495 279.826H504.283V179.316H521.613V279.826H568.401V37.2163H521.613V137.725H504.283V37.2163H457.495V279.826Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M313.644 279.825H403.756V238.235H360.433V175.85H391.624V134.26H360.433V78.806H403.756V37.2166H313.644V279.825Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M190.097 279.826H236.887V179.316H254.216V279.826H301.005V37.2163H254.216V137.725H236.887V37.2163H190.097V279.826Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
            <path
              d="M104.593 279.825H151.382V78.8064H186.039V37.217H69.9338V78.8064H104.593V279.825Z"
              stroke="black"
              strokeWidth="6.16912"
              fill="#7FABFF"
            />
          </g>
        </motion.svg>
      </div>

      {/* Subtitle Text */}
      <div className="absolute bottom-[420px] left-1/2 -translate-x-1/2 text-center w-full max-w-[658px] px-4">
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
