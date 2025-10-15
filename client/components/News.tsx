import React from "react";
import { motion } from "framer-motion";

const News = () => {
  return (
    <section className="bg-pudgy-blue-light border-t-4 border-black py-16 px-4 lg:px-[173px]">
      <div className="max-w-[1425px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/d134a29c48db7294c759d4d081956cf773839ac7?width=799"
            alt="Word on the Igloo"
            className="w-full max-w-[399px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0cc57a6dd9f3aad370658e716832b28074c2b3ab?width=867"
            alt=""
            className="w-full max-w-[433px]"
          />
        </div>

        {/* News Slider */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-5 min-w-max">
            {[
              {
                tag: "Just in!",
                title: "Pudgy Penguins' NFT sales surge 500% on mystery map.",
                author: "Danny Park",
                source: "Yahoo Finance",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/f3cc32634f7165b97d5efc1115fc1c0d99c4dee3?width=689",
                avatar:
                  "https://api.builder.io/api/v1/image/assets/TEMP/7c9a554a208770cb949b715ea73904ed9be31950?width=150",
              },
              {
                title:
                  "Pudgy Penguins help drive weekly NFT sales to more than $400 million.",
                author: "Matthew Fox",
                source: "Business Insider",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/cc58bc1df32ba57fcb3fdf2a317edfe9fa8f884c?width=689",
                avatar:
                  "https://api.builder.io/api/v1/image/assets/TEMP/176d861be1998516b345d5657a99f2e4db71c07a?width=150",
              },
              {
                title:
                  "I Joined a Penguin NFT Club Because Apparently That's What We Do Now.",
                author: "Kevin Roose",
                source: "The New York Times",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/11656c8b654d536b870e6968f3d653bff71f8374?width=689",
                avatar:
                  "https://api.builder.io/api/v1/image/assets/TEMP/604b1393786076cf11915e61abee9f3937d4d381?width=150",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[25px] border-2 border-pudgy-navy w-[368px] flex-shrink-0"
              >
                <div className="p-2.5">
                  <div className="relative rounded-[20px] border-2 border-pudgy-navy overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-[220px] object-cover"
                    />
                    {article.tag && (
                      <div className="absolute top-2.5 left-2.5 px-5 py-1.5 rounded-[12.5px] border-2 border-pudgy-navy bg-pudgy-coral">
                        <span className="text-pudgy-navy font-serif text-[21px] font-bold uppercase leading-[35px]">
                          {article.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[33px] mb-6 px-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-4 px-2">
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className="w-[75px] h-[75px] rounded-full"
                    />
                    <div>
                      <p className="text-pudgy-navy font-inter text-[13px] uppercase leading-[22px]">
                        {article.author}
                      </p>
                      <p className="text-pudgy-navy font-inter text-[11px] uppercase leading-[16px]">
                        {article.source}
                      </p>
                    </div>
                    <button className="ml-auto group relative w-[58px] h-[58px]">
                      <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
                      <div className="relative rounded-full border-2 border-pudgy-navy bg-white w-full h-full hover:-translate-y-1 transition-transform" />
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
