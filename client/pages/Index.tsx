import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="bg-pudgy-sky min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[1156px] bg-gradient-to-b from-[#2B90CC] via-[#2B90CC] via-70% to-transparent overflow-hidden">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2bd024a2db09665a324f5f9b615216dc46ed0bd7?width=3000"
          alt=""
          className="absolute top-[312px] left-0 w-full max-w-[1500px] h-[844px] object-cover"
        />

        {/* Penguin Scene */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1078px] h-[539px] px-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6f066de212d059ec9a5f36d040a61e8c32baa2a3?width=2157"
            alt=""
            className="absolute bottom-[120px] left-0 w-full h-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bed8865766bdce1350d428b39570e1751c899f5b?width=2157"
            alt=""
            className="absolute bottom-[114px] left-0 w-full h-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/879982c5c681aefc41fa843df1b0b139cfe5f101?width=2157"
            alt=""
            className="absolute bottom-[101px] left-0 w-full h-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8630c9746faf17d0ce1080b119da00be5499b11c?width=2157"
            alt=""
            className="absolute bottom-[236px] left-0 w-full h-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5ad326466f12254f8963b92523eb0487d81cb25a?width=2157"
            alt=""
            className="absolute bottom-[104px] left-0 w-full h-auto"
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
            <mask id="mask0_6_37" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="3" width="1235" height="317">
              <path d="M1234.95 3.90479H0.25V319.595H1234.95V3.90479Z" fill="white" />
            </mask>
            <g mask="url(#mask0_6_37)">
              <path d="M1047.69 279.825H1137.8V238.235H1094.48V175.85H1125.67V134.26H1094.48V78.806H1137.8V37.2166H1047.69V279.825Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M951.678 279.826H1043.52V238.235H998.467V37.2163H951.678V279.826Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M874.921 241.701V75.3411H876.654C885.319 75.3411 892.25 82.2725 892.25 158.521C892.25 234.769 885.319 241.701 876.654 241.701H874.921ZM828.132 279.825H874.921C913.045 279.825 942.504 250.365 942.504 158.521C942.504 66.6762 913.045 37.217 874.921 37.217H828.132V279.825Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M751.375 241.701V75.3407H753.108C761.773 75.3407 768.705 82.2721 768.705 158.52C768.705 234.769 761.773 241.701 753.108 241.701H751.375ZM704.587 279.825H751.375C789.499 279.825 818.959 250.365 818.959 158.52C818.959 66.6758 789.499 37.2166 751.375 37.2166H704.587V279.825Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M636.494 285.024C667.686 285.024 691.948 260.763 691.948 201.844V37.2163H645.159V212.241C645.159 243.434 641.692 246.9 636.494 246.9C631.295 246.9 627.83 243.434 627.83 212.241V37.2163H581.04V201.844C581.04 260.763 605.301 285.024 636.494 285.024Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M457.495 279.826H504.283V179.316H521.613V279.826H568.401V37.2163H521.613V137.725H504.283V37.2163H457.495V279.826Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M313.644 279.825H403.756V238.235H360.433V175.85H391.624V134.26H360.433V78.806H403.756V37.2166H313.644V279.825Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M190.097 279.826H236.887V179.316H254.216V279.826H301.005V37.2163H254.216V137.725H236.887V37.2163H190.097V279.826Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
              <path d="M104.593 279.825H151.382V78.8064H186.039V37.217H69.9338V78.8064H104.593V279.825Z" stroke="black" strokeWidth="6.16912" fill="#7FABFF" />
            </g>
          </motion.svg>
        </div>

        {/* Subtitle Text */}
        <div className="absolute bottom-[558px] left-1/2 -translate-x-1/2 text-center max-w-[658px] px-4">
          <p className="text-white font-inter text-[17px] uppercase leading-[29px]">
            Pudgy Penguins is a global IP focused on proliferating the
          </p>
          <p className="text-white font-inter text-[17px] uppercase leading-[29px]">
            penguin, memetic culture, and good vibes.
          </p>
        </div>
      </section>

      {/* Pudgy Penguins Intro Section */}
      <section className="relative bg-pudgy-coral border-t-4 border-black py-16 px-4 lg:px-[173px] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-[1425px] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col gap-10 lg:w-1/2 z-10">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/055e033148e3e75914e63d8b8b77444174f40785?width=1038"
              alt="Pudgy Penguins"
              className="w-full max-w-[519px]"
            />
            <div className="flex flex-col gap-5">
              <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
                Welcome to the world of Pudgy Penguins. a web3-<br />
                born brand that fosters creativity, freedom, and<br />
                community.
              </p>
              <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
                The Pudgy Penguins brand produces content,<br />
                merchandise, toys, and digital collectables. We<br />
                believe in the power of play and imagination, and<br />
                we're committed to helping you unlock your inner<br />
                child.
              </p>
              <p className="text-white font-inter text-[17px] uppercase leading-[28px]">
                It's a very cold place but you'll be warm with your<br />
                new favorite penguin family!
              </p>
            </div>
          </div>

          {/* Right Penguins */}
          <div className="relative lg:w-1/2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9a3a2308e81852af57217801e86d284c564c35ec?width=1000"
              alt=""
              className="absolute -left-32 top-0 w-[500px] h-[500px] lg:block hidden"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a37d2edebf5f78eb59caa7eb7e735c0f89a53aca?width=640"
              alt=""
              className="absolute left-[290px] top-[191px] w-[320px] h-[320px] lg:block hidden"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/47296227da68974851d8e10bc0b3840f26c586b1?width=440"
              alt=""
              className="absolute right-0 top-[296px] w-[220px] h-[220px] lg:block hidden"
            />
          </div>
        </div>
      </section>

      {/* Two Column Tiles Section */}
      <section className="border-t-4 border-black flex flex-col lg:flex-row">
        {/* The Pengu Prophecy */}
        <div className="relative bg-[#FFE0B2] lg:w-1/2 border-r-4 border-black p-12 lg:p-[173px] min-h-[687px] flex flex-col justify-between overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/4d2067a93c116b8e02ff63efdcc48951966f147a?width=1027"
            alt="The Pengu Prophecy"
            className="w-full max-w-[513px]"
          />
          <div className="mt-8">
            <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[28px] mb-8">
              Learn about the pengu lore
            </p>
            <button className="group relative">
              <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
              <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
                <div className="w-[54px] h-[22px] relative">
                  <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                    <path d="M16.4927 22.6445H20.4927V20.6445H22.4927V18.6445H24.4927V16.6445H26.4927V14.6445H28.4927V12.6445H30.4927V10.6445H32.4927V8.64453H34.4927V14.6445H38.4927V0.644531L34.4927 0.644531L24.4927 0.644532V4.64453H30.4927V6.64453H28.4927V8.64453H26.4927V10.6445H24.4927V12.6445H22.4927V14.6445H20.4927V16.6445H18.4927V18.6445H16.4927L16.4927 22.6445Z" fill="black" />
                  </svg>
                </div>
                <span className="font-serif text-[20px] uppercase leading-[25px]">Discover</span>
              </div>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/50ae364b97a9d74821cdecf126059c60c5cb83a0?width=600"
            alt=""
            className="absolute bottom-[0] right-[-50px] w-[300px] h-[300px]"
          />
        </div>

        {/* Shop Toys & Figurines */}
        <div className="relative bg-[#FFDBDB] lg:w-1/2 p-12 lg:p-16 min-h-[687px] flex flex-col justify-between overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/cf24847cb963669e511faf8664663043647ecc38?width=989"
            alt="Shop Toys & Figurines"
            className="w-full max-w-[494px]"
          />
          <div className="mt-8">
            <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[28px] mb-8">
              Start your collection today!
            </p>
            <button className="group relative">
              <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
              <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
                <div className="w-[54px] h-[22px] relative">
                  <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                    <path d="M16.533 22.6445H20.533V20.6445H22.533V18.6445H24.533V16.6445H26.533V14.6445H28.533V12.6445H30.533V10.6445H32.533V8.64453H34.533V14.6445H38.533V0.644531L34.533 0.644531L24.533 0.644532V4.64453H30.533V6.64453H28.533V8.64453H26.533V10.6445H24.533V12.6445H22.533V14.6445H20.533V16.6445H18.533V18.6445H16.533L16.533 22.6445Z" fill="black" />
                  </svg>
                </div>
                <span className="font-serif text-[20px] uppercase leading-[25px]">shop now</span>
              </div>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5049787a42d50b38c783db97d75d11cf445c1b8e?width=800"
            alt=""
            className="absolute bottom-[-42px] right-[-16px] w-[400px] h-[400px]"
          />
        </div>
      </section>

      {/* Lil Pudgys Claim Section */}
      <section className="relative bg-pudgy-blue-light border-t-4 border-b-4 border-black py-16 px-4 lg:px-[173px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <svg className="w-full max-w-[1108px] mx-auto h-auto" viewBox="0 0 1109 303" fill="none">
            <mask id="mask0_6_1347" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="28" width="1109" height="247">
              <path d="M1108.67 28.1514H0.328125V274.72H1108.67V28.1514Z" fill="white" />
            </mask>
            <g mask="url(#mask0_6_1347)">
              <path d="M1005.55 244.918C1034.62 244.915 1057.23 226.382 1057.22 194.616C1057.21 145.907 997.459 129.502 997.452 95.3529C997.45 83.4402 1000.68 80.7932 1005.52 80.7925C1010.37 80.7919 1015.21 84.7621 1015.22 104.616L1015.22 117.852L1053.98 117.848C1053.98 117.848 1057.2 110.964 1057.2 99.3164C1057.2 70.1977 1034.59 51.6705 1005.52 51.6738C976.451 51.6772 953.847 70.2105 953.853 102.242C953.862 150.95 1013.61 167.355 1013.62 202.562C1013.62 213.151 1010.39 215.799 1005.55 215.799C1000.7 215.8 995.859 211.83 995.855 191.976L995.853 178.74L957.097 178.744C957.097 178.744 953.869 186.687 953.871 199.923C953.876 227.718 974.872 244.922 1005.55 244.918Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M869.915 240.947L913.509 240.942L913.495 173.441L931.256 173.438L947.378 55.6401L903.784 55.6455L894.117 154.914L889.273 154.914L879.566 55.6489L835.971 55.655L852.141 173.449L869.901 173.446L869.915 240.947Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M777.892 215.826C773.04 215.826 769.804 213.178 768.187 176.104H787.598V182.725C787.598 211.854 782.745 215.826 777.892 215.826ZM779.511 244.956C807.01 244.956 829.657 226.419 829.657 181.4C829.657 162.863 824.804 150.947 824.804 150.947H768.187V148.298C768.187 84.7427 773.04 80.7711 777.892 80.7711C782.745 80.7711 787.598 84.7433 787.598 116.521V129.762H826.421C826.421 129.762 829.657 121.817 829.657 108.577C829.657 71.5028 807.01 51.6416 779.511 51.6416C748.776 51.6416 721.276 74.1505 721.276 148.298C721.276 222.446 748.776 244.956 779.511 244.956Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M647.066 211.866L647.077 84.7325H648.695C656.79 84.7332 663.266 90.0313 663.261 148.3C663.256 206.569 656.78 211.867 648.685 211.866H647.066ZM603.351 240.997L647.063 241C682.68 241.002 710.205 218.491 710.211 148.303C710.218 78.1146 682.697 55.5998 647.08 55.5977L603.367 55.5957L603.351 240.997Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M534.035 244.963C563.162 244.964 585.818 226.427 585.819 181.405L585.823 55.6086L542.133 55.608L542.128 189.349C542.127 213.184 538.891 215.832 534.036 215.832C529.182 215.832 525.945 213.183 525.946 189.348L525.951 55.6073L482.26 55.606L482.255 181.402C482.254 226.424 504.908 244.963 534.035 244.963Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M411.263 149.622L411.262 83.422H412.879C419.348 83.422 425.817 88.7174 425.818 116.522C425.819 144.326 419.349 149.622 412.881 149.622H411.263ZM367.601 240.979L411.266 240.979L411.264 177.426C445.226 177.426 469.484 157.565 469.483 116.521C469.482 74.153 446.84 55.617 411.261 55.6177L367.596 55.6183L367.601 240.979Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M223.362 240.984H309.095V209.206H267.037V55.6143H223.362V240.984Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M161.68 240.986L205.361 240.986L205.364 55.612L161.683 55.6113L161.68 240.986Z" stroke="black" strokeWidth="5.75862" fill="white" />
              <path d="M66.2725 240.984L152.01 240.985V209.206H109.95L109.951 55.6123H66.2733L66.2725 240.984Z" stroke="black" strokeWidth="5.75862" fill="white" />
            </g>
          </svg>
        </motion.div>

        {/* Description */}
        <div className="text-center max-w-[773px] mx-auto mb-12">
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
            Lil Pudgys are 22,222 Pudgys of northern descent. Lil Pudgys are cute and
          </p>
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px]">
            adorable but don't let their looks fool you. They are fierce, mighty, and are
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
              Claim free Lil Pudgys to<br />
              vibe with the Pudgy<br />
              Penguins you own.
            </h3>
            <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
              Check if a Pudgy Penguin is still eligible<br />
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
              <span key={i} className="text-pudgy-blue-light font-serif text-[39px] uppercase leading-[63px]">
                X MARKS THE SPOT WHEN THE HORIZON SHINES
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Tiles Section */}
      <section className="bg-[#E8F6F7] py-16 px-4 lg:px-[173px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1425px] mx-auto mb-12">
          {/* Pudgy Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-pudgy-cream rounded-[25px] border-4 border-pudgy-navy p-12 relative overflow-hidden"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fdace4860fd862210bc81e705962de5c93839608?width=706"
              alt="Pudgy Media"
              className="w-full max-w-[353px] mb-8"
            />
            <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
              Inspire, Participate, and create with<br />
              your fellow penguins.
            </p>
            <button className="group relative">
              <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
              <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
                <div className="w-[54px] h-[22px] relative">
                  <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                    <path d="M16.6646 22.2983H20.6646V20.2983H22.6646V18.2983H24.6646V16.2983H26.6646V14.2983H28.6646V12.2983H30.6646V10.2983H32.6646V8.29834H34.6646V14.2983H38.6646V0.29834L34.6646 0.29834L24.6646 0.29834V4.29834H30.6646V6.29834H28.6646V8.29834H26.6646V10.2983H24.6646V12.2983H22.6646V14.2983H20.6646V16.2983H18.6646V18.2983H16.6646L16.6646 22.2983Z" fill="black" />
                  </svg>
                </div>
                <span className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[30px]">
                  View Pudgy Media
                </span>
              </div>
            </button>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/68de9de9c552f2c4b8c8fe8203df0e3393a9baac?width=273"
              alt=""
              className="absolute bottom-4 right-4 w-[137px] h-auto"
            />
          </motion.div>

          {/* Pudgy Discord */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-pudgy-sky rounded-[25px] border-4 border-pudgy-navy p-12 relative overflow-hidden"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91e7871f60800a470b64bc15db1796103ee271f9?width=897"
              alt="Pudgy Discord"
              className="w-full max-w-[449px] mb-8"
            />
            <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
              A hangout spot for all Penguins.<br />
              Join to interact with The Huddle.
            </p>
            <button className="group relative">
              <div className="absolute inset-0 rounded-full border-2 border-pudgy-navy bg-pudgy-blue-bright translate-x-0 translate-y-1" />
              <div className="relative flex items-center gap-4 px-6 py-4 rounded-full border-2 border-pudgy-navy bg-white hover:-translate-y-1 transition-transform">
                <div className="w-[54px] h-[22px] relative">
                  <svg viewBox="0 0 55 23" fill="none" className="w-full h-full">
                    <path d="M16.6646 22.2983H20.6646V20.2983H22.6646V18.2983H24.6646V16.2983H26.6646V14.2983H28.6646V12.2983H30.6646V10.2983H32.6646V8.29834H34.6646V14.2983H38.6646V0.29834L34.6646 0.29834L24.6646 0.29834V4.29834H30.6646V6.29834H28.6646V8.29834H26.6646V10.2983H24.6646V12.2983H22.6646V14.2983H20.6646V16.2983H18.6646V18.2983H16.6646L16.6646 22.2983Z" fill="black" />
                  </svg>
                </div>
                <span className="text-pudgy-navy font-serif text-[18px] font-bold uppercase leading-[30px]">
                  Join Now
                </span>
              </div>
            </button>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/af5e4fbc21ce9edb88e0ddcb57c3632716a8cfd8?width=273"
              alt=""
              className="absolute bottom-4 right-4 w-[137px] h-auto"
            />
          </motion.div>
        </div>

        {/* Pengu Kindness */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#FBE9F3] rounded-[25px] border-4 border-pudgy-navy p-12 max-w-[1070px] mx-auto relative overflow-hidden"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fdace4860fd862210bc81e705962de5c93839608?width=706"
            alt="Pengu Kindness"
            className="w-full max-w-[353px] mb-8"
          />
          <p className="text-pudgy-navy font-inter text-[17px] uppercase leading-[29px] mb-8">
            Find out how pengu is changing<br />
            lives.
          </p>
          <button className="px-12 py-6 rounded-[5px] border-4 border-black bg-pudgy-blue-light hover:bg-pudgy-blue-bright transition-colors">
            <span className="text-white font-serif text-[24px] uppercase leading-[46px]">
              Visit pengu kindness
            </span>
          </button>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/82cb21bf341c4db491f7e2ff3d6ce5847c472fb6?width=885"
            alt=""
            className="absolute bottom-0 right-12 w-[443px] h-auto"
          />
        </motion.div>
      </section>

      {/* Word on the Igloo - News Section */}
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
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/f3cc32634f7165b97d5efc1115fc1c0d99c4dee3?width=689",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/7c9a554a208770cb949b715ea73904ed9be31950?width=150"
                },
                {
                  title: "Pudgy Penguins help drive weekly NFT sales to more than $400 million.",
                  author: "Matthew Fox",
                  source: "Business Insider",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/cc58bc1df32ba57fcb3fdf2a317edfe9fa8f884c?width=689",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/176d861be1998516b345d5657a99f2e4db71c07a?width=150"
                },
                {
                  title: "I Joined a Penguin NFT Club Because Apparently That's What We Do Now.",
                  author: "Kevin Roose",
                  source: "The New York Times",
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/11656c8b654d536b870e6968f3d653bff71f8374?width=689",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/604b1393786076cf11915e61abee9f3937d4d381?width=150"
                }
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
                      <img src={article.image} alt="" className="w-full h-[220px] object-cover" />
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
                      <img src={article.avatar} alt={article.author} className="w-[75px] h-[75px] rounded-full" />
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
    </div>
  );
}
