import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Using Lucide icons (you can replace if needed)

const News = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const articles = [
    {
      tag: "Breaking!",
      title: "Chunky Doge’s meme coin hype surges 500% after mysterious drop.",
      author: "Danny Bark",
      source: "Yahoo Finance",
      image: "/1.webp",
      avatar: "/3.webp",
    },
    {
      title:
        "Chunky Doge leads the meme coin rally, sending weekly trading to the moon.",
      author: "Matthew Fluff",
      source: "Business Insider",
      image: "/7.webp",
      avatar: "/4.webp",
    },
    {
      title:
        "I Joined the Chunky Doge Army — and Now I Just Keep Barking ‘To The Moon!’",
      author: "Kevin Woofe",
      source: "The New York Times",
      image: "/1.webp",
      avatar: "/8.webp",
    },
    {
      title: "This is the best for future income — future income is the best.",
      author: "Kevin Woofe",
      source: "The New York Times",
      image: "/7.webp",
      avatar: "/4.webp",
    },
  ];

  return (
    <section className="bg-pudgy-blue-light border-t-4 border-black py-10 sm:py-16 px-4 sm:px-8 lg:px-[173px]">
      <div className="max-w-[1425px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[500px] object-contain"
          >
            <h2
              className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[100px]  font-extrabold uppercase text-left tracking-tighter leading-none"
              style={{
                color: "white",
                WebkitTextStroke: "3px black", // outline
                textStroke: "3px black", // fallback
              }}
            >
              Word on the Igloo
            </h2>
          </motion.div>
          <img
            src="3.png"
            alt="News Icon"
            className="w-[120px] sm:w-[160px] md:w-[200px] object-contain"
          />
        </div>

        {/* News Slider */}
        <div
          className="overflow-x-auto  pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-5 sm:gap-6 md:gap-8 min-w-max">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[20px] sm:rounded-[25px] border-2 border-pudgy-navy w-[280px] sm:w-[320px] md:w-[368px] flex-shrink-0 flex flex-col justify-between"
              >
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  {/* Image */}
                  <div className="relative rounded-[15px] sm:rounded-[20px] border-2 border-pudgy-navy overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
                    />
                    {article.tag && (
                      <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-[10px] sm:rounded-[12.5px] border-2 border-pudgy-navy bg-pudgy-coral">
                        <span className="text-pudgy-navy font-serif text-[14px] sm:text-[18px] md:text-[21px] font-bold uppercase leading-[25px] sm:leading-[30px] md:leading-[35px]">
                          {article.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-pudgy-navy font-serif text-[16px] sm:text-[18px] font-bold uppercase leading-[26px] sm:leading-[33px] mb-4 sm:mb-6 px-1 sm:px-2 flex-grow">
                    {article.title}
                  </h4>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto px-1 sm:px-2">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={article.avatar}
                        alt={article.author}
                        className="w-[55px] sm:w-[65px] md:w-[75px] h-[55px] sm:h-[65px] md:h-[75px] rounded-full object-cover"
                      />
                      <div>
                        <p className="text-pudgy-navy font-inter text-[12px] sm:text-[13px] uppercase leading-[18px] sm:leading-[22px]">
                          {article.author}
                        </p>
                        <p className="text-pudgy-navy font-inter text-[10px] sm:text-[11px] uppercase leading-[14px] sm:leading-[16px]">
                          {article.source}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <button className="group relative w-[45px] sm:w-[50px] md:w-[58px] h-[45px] sm:h-[50px] md:h-[58px]">
                      <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
                      <div className="relative rounded-full border-2 border-pudgy-navy bg-white w-full h-full flex items-center justify-center hover:-translate-y-1 transition-transform">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-pudgy-navy" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
