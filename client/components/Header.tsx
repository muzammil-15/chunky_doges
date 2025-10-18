import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClosedCaption, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive adjustments
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Marquee Bar */}
      <div className="bg-pudgy-navy h-[30px] sm:h-[35px] md:h-[45px] overflow-hidden relative">
        <motion.div
          className="absolute whitespace-nowrap flex gap-[20px] sm:gap-[36px] md:gap-[56px] h-full items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[12px] sm:text-[14px] md:text-[16px] uppercase font-inter font-normal leading-[20px] sm:leading-[24px] md:leading-[26px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFDBDB 0%, #FF8B8B 20.03%, #C5FBFF 51.25%, #FFE0B3 79.78%, #80ABFF 99.99%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $CHUNKY now live
            </span>
          ))}
        </motion.div>
        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] sm:h-[4px] md:h-[5px] bg-gradient-to-r from-[#C5FBFF] via-[#FF8B8B] via-[34%] via-[#FFE092] via-[72%] to-[#FFDBDB]" />
      </div>

      {/* Main Navigation */}
      <nav className="bg-transparent h-[70px] sm:h-[80px] md:h-[92px] flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[173px] relative">
        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-[5px] border-2 border-black bg-pudgy-blue-light translate-y-1 transition-all duration-300 group-hover:translate-y-0.5" />
          <div className="relative px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-[5px] border-2 border-black bg-pudgy-blue-light hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <span className="text-pudgy-sky font-serif text-[16px] sm:text-[18px] md:text-[21px] uppercase leading-[20px] sm:leading-[23px] md:leading-[26px]">
              Menu
            </span>
          </div>
        </button>

        {/* Logo */}
        <div className="absolute left-3/4 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="logo.png"
            alt="Chunky Doges"
            className="w-[60px] h-[50px] sm:w-[75px] h-[62px] md:w-[89px] h-[74px]"
          />
        </div>

        {/* Buy $CHUNKY Button */}
        <button className="hidden sm:flex sm:relative group">
          <div className="absolute inset-0 rounded-[5px] border-2 border-black bg-pudgy-blue-light translate-y-1 transition-all duration-300 group-hover:translate-y-0.5" />
          <div className="relative px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-[5px] border-2 border-black bg-pudgy-blue-light hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <span className="text-pudgy-sky font-serif text-[16px] sm:text-[18px] md:text-[21px] uppercase leading-[20px] sm:leading-[23px] md:leading-[26px]">
              Buy $CHUNKY
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
          className="absolute top-0 max-h-[60vh] left-0 right-0 bg-pudgy-navy rounded-b-[15px] sm:rounded-b-[20px] md:rounded-b-[25px] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] border-pudgy-coral p-6 sm:p-8 md:p-12 "
        >
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="#" className="text-pudgy-blue-light font-serif text-[20px] sm:text-[28px] md:text-[36px] font-bold uppercase   hover:text-pudgy-coral transition-colors duration-300">
                The Team
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[20px] sm:text-[28px] md:text-[36px] font-bold uppercase   hover:text-pudgy-coral transition-colors duration-300">
                Doge Lore
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[20px] sm:text-[28px] md:text-[36px] font-bold uppercase   hover:text-pudgy-coral transition-colors duration-300">
                Buy $CHUNKY
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="#" className="text-pudgy-blue-light font-serif text-[20px] sm:text-[28px] md:text-[36px] font-bold uppercase   hover:text-pudgy-coral transition-colors duration-300">
                Shop
              </a>
              <a href="#" className="text-pudgy-blue-light font-serif text-[20px] sm:text-[28px] md:text-[36px] font-bold uppercase   hover:text-pudgy-coral transition-colors duration-300">
                Kennel Brand
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] group"
          >
            <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-sky translate-y-0.5 transition-all duration-300 group-hover:translate-y-0" />
            <div className="relative rounded-full border-2 border-pudgy-navy bg-pudgy-coral w-full h-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <X/>
            </div>
          </button>
        </motion.div>
      )}
    </header>
  );
}