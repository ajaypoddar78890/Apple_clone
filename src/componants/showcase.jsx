const Showcase = () => {
  return (
    <div className="main container mx-auto px-10 ">
      <div className="text-gray-300   px-2  md:text-6xl   w-full h-full">
        <h2 className="text-pop-up-right text-2xl md:text-4xl lg:text-6xl ">
          A17 Pro chip. <br /> A monster win for gaming.
        </h2>

        <p className="text-lg  first-line: py-2 md:text-2xl  mt-2 md:mt-4 text-gray-600">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>
      <div className="videosection md:mt-10     border-2 border-gray-800">
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
