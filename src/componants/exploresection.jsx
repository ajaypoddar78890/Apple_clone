const ExploreSection = () => {
  return (
    <div className="explore-section bg-zinc=900 py-10">
      <div className="container mx-auto px-10">
        <div className="title">
          <h3 className="text-3xl md:text-7xl py-20">
            iphone <br />
            Forged in titanium
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            className="col-span-4 bg-blue-900 rounded-lg shadow-md overflow-hidden"
            style={{ height: "80vh" }}
          >
            <video
              src="/assets/videos/explore.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div
            className="col-span-2 bg-blue-900 rounded-lg shadow-md overflow-hidden"
            style={{ height: "40vh" }}
          >
            <img
              src="/assets/images/explore1.jpg"
              alt="Explore 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="col-span-2 bg-blue-900 rounded-lg shadow-md  s"
            style={{ height: "40vh" }}
          >
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
