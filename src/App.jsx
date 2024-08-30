import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Hightlight from "./componants/Hightlight";
import Showcase from "./componants/showcase";
import { HeroScrollDemo } from "./componants/HeroScrollDemo";
// import { TextGenerateEffectDemo } from "./componants/TextGenerateEffectDemo";
import Acamerasection from "./componants/Acamerasection";
import ExploreSection from "./componants/exploresection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Hightlight />
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
