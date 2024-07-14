import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Hightlight from "./componants/Hightlight";

function App() {
  return (
    <>
      <div className=" selection:">
        <Navbar />
        <Hero />
        <Hightlight />
      </div>
    </>
  );
}

export default App;
