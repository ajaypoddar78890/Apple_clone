import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Hightlight from "./componants/Hightlight";
import Showcase from "./componants/showcase";
import { HeroScrollDemo } from "./componants/HeroScrollDemo";
// import { TextGenerateEffectDemo } from "./componants/TextGenerateEffectDemo";

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
      </div>
    </>
  );
}

export default App;
