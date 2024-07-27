const Showcase = () => {
  return (
    <div className="main container mx-auto ">
      <div className="text-gray-300    md:text-6xl   w-screen h-full">
        <h2 className="text-pop-up-right">
          A17 Pro chip. <br /> A monster win for gaming.
        </h2>
        <span>
          <p className="md:text-3xl mt-8 text-gray-600">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </span>
      </div>
      <div className="videosection md:py-10   h-2/3">
        <video
          className="w-full h-full object-cover"
          playsInline
          preload="auto"
          muted
          autoPlay
          loop={true}
        >
          <source src="./assets/videos/iphoneshortvideo.webm" />
        </video>
      </div>
    </div>
  );
};

export default Showcase;
