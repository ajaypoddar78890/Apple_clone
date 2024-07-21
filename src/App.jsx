import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Hightlight from "./componants/Hightlight";
import Showcase from "./componants/showcase";
import { HeroScrollDemo } from "./componants/HeroScrollDemo";
 

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Hightlight />
        <HeroScrollDemo />
       

        <Showcase />
      </div>
    </>
  );
}

export default App;
