import { CheckCircle2 } from "lucide-react";
import logo from "../assets/logofinal2.png";
import admin from "../assets/Cat.jpg";


const AboutUs = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-900" id="about">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
          About{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
      <div className="flex flex-wrap justify-center">
        <img
          src={logo}
          alt="Your company logo"
          className="w-60 h-60 rounded-full mb-8 mx-auto"
        />
        <p className="text-lg leading-loose text-center px-20">
          AdoptiPaws: Connecting Animals with Loving Homes
          Empower your compassion and make a difference by adopting
          a pet or helping animals in need. With AdoptiPaws,
          you can easily search for adoptable pets,
          report animals in distress, and join a community dedicated to animal welfare.
          Start today and help create a brighter future for every paw in need!
        </p>
        {/* <h3 className="text-2xl text-center mt-16">Our Team</h3> */}
        {/* <p className="text-lg text-center text-neutral-500 px-20">
          Meet the team behind AdoptiPaws!  
        </p> */}
        {/* <h3 className="text-2xl text-center mt-16">Our Team</h3> */}

        <ul className="flex flex-wrap justify-center">
          <li className="text-center">
            <img
              src={admin}
              alt="Team member 1"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <p className="text-2xl font-semibold text-green-400">{`Asad Ali`}</p>
            <p className="text-sm text-gray-500">{`Developer`}</p>
          </li>
          {/* Add more team member sections here */}
          </ul>
          
      </div>
    </div>
  );
};

export default AboutUs;