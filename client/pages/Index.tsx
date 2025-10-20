import Claim from "@/components/Claim";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import News from "@/components/News";
import Slider from "@/components/Slider";
import Tiles from "@/components/Tiles";

export default function Index() {
  return (
    <div className="">
      <Hero/>
      <Intro/>
      <Tiles/>
      <Claim/>
      <Slider/>
      <News/>
    </div>
  );
}
