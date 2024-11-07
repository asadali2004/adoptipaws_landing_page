import video1 from "../assets/cat2.mp4";
import video2 from "../assets/dog6.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-2">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Connecting Animals 
        <span className="bg-gradient-to-r from-red-700 to-green-400 text-transparent bg-clip-text">
          {" "}
           with Loving Homes
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
              Empower your compassion and make a difference by adopting a pet or helping animals in need.
              With AdoptiPaws, you can easily search for adoptable pets, report animals in distress,
              and join a community dedicated to animal welfare.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="http://adoptipaws.freesite.online/"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
         Explore AdoptiPaws
        </a>
       
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
