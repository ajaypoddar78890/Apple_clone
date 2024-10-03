import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Hightlight from "./componants/Hightlight";
import Showcase from "./componants/showcase";
import { HeroScrollDemo } from "./componants/HeroScrollDemo";
// import { TextGenerateEffectDemo } from "./componants/TextGenerateEffectDemo";
import Acamerasection from "./componants/Acamerasection";
import ExploreSection from "./componants/exploresection";
// import Videocarousel from "./componants/VideoCarousel";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Hightlight />
        {/* <Videocarousel/> */}

        <HeroScrollDemo />
        <Showcase />
        {/* <TextGenerateEffectDemo /> */}
        <Acamerasection />
        <ExploreSection />
      </div>
    </>
  );
}

export default App;
