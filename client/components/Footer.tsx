import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative">
      {/* Top Marquee */}
      <div className="bg-pudgy-navy relative overflow-hidden">
        <div className="h-[5px] bg-gradient-to-r from-[#C5FBFF] via-[#FF8B8B] via-[34%] via-[#FFE092] via-[72%] to-[#FFDBDB]" />
        <div className="h-[50px] overflow-hidden">
          <motion.div
            className="absolute whitespace-nowrap flex gap-14 h-full items-center py-2.5 px-7"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
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
                Welcome to the home of the doges, The Chunky Pack! 🐶
              </span>
            ))}
          </motion.div>
        </div>
        <div className="h-[5px] bg-gradient-to-r from-[#C5FBFF] via-[#FF8B8B] via-[34%] via-[#FFE092] via-[72%] to-[#FFDBDB]" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-pudgy-navy px-8 md:px-12 lg:px-[173px] py-11">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Logo */}
          <img
            src="logo.png"
            alt="Pudgy Penguins"
            className="w-[107px] h-[89px]"
          />

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            <div className="flex flex-col gap-0">
              <a
                href="#"
                className="text-pudgy-blue-light font-serif text-[33px] font-bold uppercase leading-[76px] hover:text-pudgy-coral transition-colors"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000",
                }}
              >
                The Team
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light font-serif text-[33px] font-bold uppercase leading-[76px] hover:text-pudgy-coral transition-colors"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000",
                }}
              >
                chunky Lore
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light font-serif text-[33px] font-bold uppercase leading-[76px] hover:text-pudgy-coral transition-colors"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000",
                }}
              >
                Buy $chunky
              </a>
            </div>
            <div className="flex flex-col gap-0">
              <a
                href="#"
                className="text-pudgy-blue-light font-serif text-[33px] font-bold uppercase leading-[76px] hover:text-pudgy-coral transition-colors"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000",
                }}
              >
                Shop
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light font-serif text-[33px] font-bold uppercase leading-[76px] hover:text-pudgy-coral transition-colors"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000",
                }}
              >
                Igloo Brand
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-serif text-[18px] font-bold uppercase leading-[30px]">
              follow us, fellow pengu
            </h3>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded-full overflow-hidden hover:scale-150 transition-transform"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/50c89d2a27a7d29472ae0f4c8b8e6dde455f4e3e?width=281"
                  alt="Social"
                  className="w-full h-full object-cover"
                />
              </a>
              <a
                href="#"
                className=" rounded-full overflow-hidden hover:scale-150 transition-transform"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a929930e756613c41581af9754533503d40c171c?width=281"
                  alt="Social"
                  className="w-full h-full object-cover"
                />
              </a>
              <a
                href="#"
                className=" rounded-full overflow-hidden hover:scale-150 transition-transform"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b65b2613599af27d034519213b52d9f4a534df87?width=281"
                  alt="Social"
                  className="w-full h-full object-cover"
                />
              </a>
              <a
                href="#"
                className="rounded-full overflow-hidden hover:scale-150 transition-transform"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ef5b473544e5e1389650145fb5838f8f662bb49c?width=281"
                  alt="Social"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 lg:mt-16 pt-4 border-t border-[#477DFD]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-pudgy-blue-light text-[13px] uppercase leading-[18px] tracking-[-0.3px]">
              Copyright © 2025 -- LSLTTT Holdings, Inc. dba "chunky doges" --
              All rights reserved
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="text-pudgy-blue-light text-[13px] uppercase leading-[18px] tracking-[-0.3px] hover:text-pudgy-coral transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light text-[13px] uppercase leading-[18px] tracking-[-0.3px] hover:text-pudgy-coral transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light text-[13px] uppercase leading-[18px] tracking-[-0.3px] hover:text-pudgy-coral transition-colors"
              >
                IP Rights
              </a>
              <a
                href="#"
                className="text-pudgy-blue-light text-[13px] uppercase leading-[18px] tracking-[-0.3px] hover:text-pudgy-coral transition-colors"
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
