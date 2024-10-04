const ExploreSection = () => {
  return (
    <div className="explore-section bg-zinc-900 py-10 font-customheading">
      <div className="container mx-auto px-10">
        <div className="title">
          <h3 className="text-3xl md:text-7xl py-5">
            iphone <br />
            Forged in titanium
          </h3>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video spans 2 columns on medium screens and up */}
          <div className="md:col-span-2 bg-blue-900 rounded-lg shadow-md overflow-hidden h-[40vh]">
            <video
              src="/assets/videos/explore.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>

          {/* Image 1 */}
          <div className="bg-blue-900 h-[30vh]  md:h-[60vh] rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/images/explore1.jpg"
              alt="Explore 1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-blue-900 h-[30vh] md:h-[60vh] rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/images/explore2.jpg"
              alt="Explore 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
