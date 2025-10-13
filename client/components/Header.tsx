import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Marquee Bar */}
      <div className="bg-pudgy-navy h-[45px] overflow-hidden relative">
        <motion.div
          className="absolute whitespace-nowrap flex gap-[56px] h-full items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[16px] uppercase font-inter font-normal leading-[26px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFDBDB 0%, #FF8B8B 20.03%, #C5FBFF 51.25%, #FFE0B3 79.78%, #80ABFF 99.99%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $PENGU now live
            </span>
          ))}
        </motion.div>
        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#C5FBFF] via-[#FF8B8B] via-[34%] via-[#FFE092] via-[72%] to-[#FFDBDB]" />
      </div>

      {/* Main Navigation */}
      <nav className="bg-transparent h-[92px] flex items-center justify-between px-8 md:px-12 lg:px-[173px] relative">
        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-[5px] border-2 border-black bg-pudgy-blue-light translate-y-1" />
          <div className="relative px-7 py-3 rounded-[5px] border-2 border-black bg-pudgy-blue-light hover:-translate-y-1 transition-transform">
            <span className="text-pudgy-sky font-serif text-[21px] uppercase leading-[26px]">
              Menu
            </span>
          </div>
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="public/logo.jpg"
            alt="Pudgy Penguins"
            className="w-[89px] h-[74px]"
          />
        </div>

        {/* Buy $PENGU Button */}
        <button className="relative group">
          <div className="absolute inset-0 rounded-[5px] border-2 border-black bg-pudgy-blue-light translate-y-1" />
          <div className="relative px-7 py-3 rounded-[5px] border-2 border-black bg-pudgy-blue-light hover:-translate-y-1 transition-transform">
            <span className="text-pudgy-sky font-serif text-[21px] uppercase leading-[26px]">
              Buy $PENGU
            </span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ y: -700 }}
          animate={{ y: 0 }}
          exit={{ y: -700 }}
          transition={{ type: "spring", damping: 25 }}
          className="absolute top-[137px] left-0 right-0 bg-pudgy-navy rounded-b-[25px] border-b-[10px] border-pudgy-coral p-12 lg:p-[173px]"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-pudgy-blue-light font-serif text-[54px] font-bold uppercase leading-[93px] hover:text-pudgy-coral transition-colors">
                The Team
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[54px] font-bold uppercase leading-[93px] hover:text-pudgy-coral transition-colors">
                Pengu Lore
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[54px] font-bold uppercase leading-[93px] hover:text-pudgy-coral transition-colors">
                Buy $PENGU
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-pudgy-blue-light font-serif text-[54px] font-bold uppercase leading-[93px] hover:text-pudgy-coral transition-colors">
                Shop
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[54px] font-bold uppercase leading-[93px] hover:text-pudgy-coral transition-colors">
                Igloo Brand
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-[58px] h-[58px] group"
          >
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-sky translate-y-0.5" />
            <div className="relative rounded-full border-2 border-pudgy-navy bg-pudgy-coral w-full h-full flex items-center justify-center hover:-translate-y-1 transition-transform">
              <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
                <path d="M0 30L22 15L0 0V30Z" fill="black" transform="rotate(45 11 15)" />
              </svg>
            </div>
          </button>
        </motion.div>
      )}
    </header>
  );
}
