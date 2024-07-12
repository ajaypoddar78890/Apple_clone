 import Navbar from "./componants/Navbar"
 import Hero from "./componants/Hero"
 import Highlights from "./componants/highlights"

function App() {
 

  return (
    <>
<section className="main-section   flex items-center justify-center h-screen">
  <div className="container mx-auto px-8 md:px-10">
    <Navbar />
    <Hero />
    <Highlights />
  </div>
</section>


    </>
  )
}

export default App
