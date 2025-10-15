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
        <svg
          className="w-full max-w-[1108px] mx-auto h-auto"
          viewBox="0 0 1109 303"
          fill="none"
        >
          <mask
            id="mask0_6_1347"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="28"
            width="1109"
            height="247"
          >
            <path
              d="M1108.67 28.1514H0.328125V274.72H1108.67V28.1514Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_6_1347)">
            <path
              d="M1005.55 244.918C1034.62 244.915 1057.23 226.382 1057.22 194.616C1057.21 145.907 997.459 129.502 997.452 95.3529C997.45 83.4402 1000.68 80.7932 1005.52 80.7925C1010.37 80.7919 1015.21 84.7621 1015.22 104.616L1015.22 117.852L1053.98 117.848C1053.98 117.848 1057.2 110.964 1057.2 99.3164C1057.2 70.1977 1034.59 51.6705 1005.52 51.6738C976.451 51.6772 953.847 70.2105 953.853 102.242C953.862 150.95 1013.61 167.355 1013.62 202.562C1013.62 213.151 1010.39 215.799 1005.55 215.799C1000.7 215.8 995.859 211.83 995.855 191.976L995.853 178.74L957.097 178.744C957.097 178.744 953.869 186.687 953.871 199.923C953.876 227.718 974.872 244.922 1005.55 244.918Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M869.915 240.947L913.509 240.942L913.495 173.441L931.256 173.438L947.378 55.6401L903.784 55.6455L894.117 154.914L889.273 154.914L879.566 55.6489L835.971 55.655L852.141 173.449L869.901 173.446L869.915 240.947Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M777.892 215.826C773.04 215.826 769.804 213.178 768.187 176.104H787.598V182.725C787.598 211.854 782.745 215.826 777.892 215.826ZM779.511 244.956C807.01 244.956 829.657 226.419 829.657 181.4C829.657 162.863 824.804 150.947 824.804 150.947H768.187V148.298C768.187 84.7427 773.04 80.7711 777.892 80.7711C782.745 80.7711 787.598 84.7433 787.598 116.521V129.762H826.421C826.421 129.762 829.657 121.817 829.657 108.577C829.657 71.5028 807.01 51.6416 779.511 51.6416C748.776 51.6416 721.276 74.1505 721.276 148.298C721.276 222.446 748.776 244.956 779.511 244.956Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M647.066 211.866L647.077 84.7325H648.695C656.79 84.7332 663.266 90.0313 663.261 148.3C663.256 206.569 656.78 211.867 648.685 211.866H647.066ZM603.351 240.997L647.063 241C682.68 241.002 710.205 218.491 710.211 148.303C710.218 78.1146 682.697 55.5998 647.08 55.5977L603.367 55.5957L603.351 240.997Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M534.035 244.963C563.162 244.964 585.818 226.427 585.819 181.405L585.823 55.6086L542.133 55.608L542.128 189.349C542.127 213.184 538.891 215.832 534.036 215.832C529.182 215.832 525.945 213.183 525.946 189.348L525.951 55.6073L482.26 55.606L482.255 181.402C482.254 226.424 504.908 244.963 534.035 244.963Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M411.263 149.622L411.262 83.422H412.879C419.348 83.422 425.817 88.7174 425.818 116.522C425.819 144.326 419.349 149.622 412.881 149.622H411.263ZM367.601 240.979L411.266 240.979L411.264 177.426C445.226 177.426 469.484 157.565 469.483 116.521C469.482 74.153 446.84 55.617 411.261 55.6177L367.596 55.6183L367.601 240.979Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M223.362 240.984H309.095V209.206H267.037V55.6143H223.362V240.984Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M161.68 240.986L205.361 240.986L205.364 55.612L161.683 55.6113L161.68 240.986Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
            <path
              d="M66.2725 240.984L152.01 240.985V209.206H109.95L109.951 55.6123H66.2733L66.2725 240.984Z"
              stroke="black"
              strokeWidth="5.75862"
              fill="white"
            />
          </g>
        </svg>
      </motion.div>

      {/* Description */}
      <div className="text-center max-w-[773px] mx-auto mb-12">
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          Lil Pudgys are 22,222 Pudgys of northern descent. Lil Pudgys are cute
          and
        </p>
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          adorable but don't let their looks fool you. They are fierce, mighty,
          and are
        </p>
        <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
          allies in the fight against the evil bears of negativity.
        </p>
      </div>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1abfc669e282f345d0f130b76791623b7f34d7ec?width=1280"
        alt=""
        className="mx-auto w-full max-w-[640px] mb-16"
      />

      {/* Claim Card */}
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-[1034px] mx-auto">
        <div className="relative w-full max-w-[399px] h-[548px] rounded-[25px] border-4 border-black overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5d06970d5d97b6825340b55cb1e227e6dbd66c6f?width=781"
            alt="Pudgy Penguin Card"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 bg-pudgy-cream rounded-[25px] border-4 border-black p-8 lg:p-12">
          <h3 className="font-serif text-[33px] font-bold uppercase leading-[61px] mb-4">
            Claim free Lil Pudgys to
            <br />
            vibe with the Pudgy
            <br />
            Penguins you own.
          </h3>
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
            Check if a Pudgy Penguin is still eligible
            <br />
            to claim a Lil Pudgy
          </p>
          <button className="w-full max-w-[580px] py-6 rounded-[5px] border-4 border-black bg-pudgy-blue-light hover:bg-pudgy-blue-bright transition-colors">
            <span className="text-pudgy-sky font-serif text-[24px] uppercase leading-[48px]">
              CONNECT WALLET
            </span>
          </button>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3d8f9032a2b629f7ecc03c533104d44a586079d4?width=445"
            alt=""
            className="absolute bottom-0 right-12 w-[223px] h-auto"
          />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="mt-24 bg-pudgy-cream h-[98px] overflow-hidden relative">
        <motion.div
          className="absolute whitespace-nowrap flex gap-6 h-full items-center px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
