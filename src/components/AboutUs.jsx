import { Heart, Users, Award, Target } from "lucide-react";
import logo from "../assets/logofinal2.png";
import admin from "../assets/Cat.jpg";

const AboutUs = () => {
  const stats = [
    { icon: <Heart className="w-8 h-8" />, number: "10,000+", label: "Animals Rescued" },
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Partner NGOs" },
    { icon: <Award className="w-8 h-8" />, number: "50,000+", label: "Happy Adoptions" },
    { icon: <Target className="w-8 h-8" />, number: "100%", label: "Success Rate" },
  ];

  return (
    <div className="mt-32 border-t py-20 border-neutral-900/50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-neutral-900/80 text-green-400 rounded-full h-8 text-sm font-medium px-6 py-2 uppercase tracking-wider border border-green-500/30 backdrop-blur-sm">
            <span className="mr-2">🌟</span>
            About Us
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide text-center font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Mission
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            We're building a world where every animal finds a loving home and compassionate care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Logo & Description */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-2xl opacity-50"></div>
              <img
                src={logo}
                alt="AdoptiPaws Logo"
                className="relative w-48 h-48 rounded-full mx-auto lg:mx-0 border-4 border-green-500/30 shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">AdoptiPaws: Connecting Hearts</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Empower your compassion and make a difference by adopting a pet or helping animals in need. 
                With AdoptiPaws, you can easily search for adoptable pets, report animals in distress, 
                and join a community dedicated to animal welfare.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Start today and help create a brighter future for every paw in need! 
                Every connection made through our platform brings us closer to a world where no animal suffers alone.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50 text-center backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group">
                <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
          <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
            Passionate individuals working tirelessly to make a difference in the lives of animals everywhere.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 p-8 rounded-2xl border border-neutral-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group max-w-sm">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img
                  src={admin}
                  alt="Asad Ali"
                  className="relative w-32 h-32 rounded-full mx-auto border-4 border-green-500/30 object-cover shadow-xl"
                />
              </div>
              <h4 className="text-2xl font-bold text-green-400 mb-2">Asad Ali</h4>
              <p className="text-neutral-400 mb-4">Founder & Developer</p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Passionate about using technology to create meaningful connections between animals and their future families.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
            <p className="text-neutral-300 mb-6">
              Join thousands of animal lovers who are already making a positive impact through AdoptiPaws.
            </p>
            <a 
              href="http://adoptipaws.tech/" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 py-4 px-8 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;