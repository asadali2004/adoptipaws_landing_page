import { useState, useEffect } from "react";
import { Heart, Star, ArrowRight, Play } from "lucide-react";
import catImg from "../assets/Cat.jpg";
import dogImg from "../assets/Dog.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [catImg, dogImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center mt-6 lg:mt-2 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-300">
        <Heart className="w-8 h-8 text-pink-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-700">
        <Star className="w-6 h-6 text-yellow-400 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-500">
        <Heart className="w-6 h-6 text-red-400 opacity-60" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
          <span className="text-green-400 text-sm font-medium">🐾 Save Lives, Find Love</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 text-transparent bg-clip-text animate-fade-in">
          Connecting Animals 
          <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-transparent bg-clip-text animate-pulse">
            with Loving Homes
          </span>
        </h1>

        <p className="mt-8 text-xl text-center text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          Empower your compassion and make a difference by adopting a pet or helping animals in need.
          With AdoptiPaws, you can easily search for adoptable pets, report animals in distress,
          and join a community dedicated to animal welfare.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-12">
          <a
            href="http://adoptipaws.tech/"
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Explore AdoptiPaws
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={() => document.getElementById('feture')?.scrollIntoView({ behavior: 'smooth' })}
            className="group border-2 border-green-500/50 hover:border-green-400 py-4 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-green-500/10 flex items-center gap-2"
          >
            <Heart className="w-5 h-5 group-hover:text-red-400 transition-colors" />
            Learn More
          </button>
        </div>

        {/* Enhanced Image Gallery */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src={images[currentImageIndex]}
                alt="Adorable pets waiting for adoption"
                className="relative rounded-2xl w-full h-80 object-cover border border-green-500/30 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Find Your Perfect Companion</h3>
                  <p className="text-sm opacity-90">Thousands of loving pets are waiting for their forever homes</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">10,000+ Animals Rescued</h4>
                  <p className="text-neutral-400">Lives saved through our platform</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">500+ Partner NGOs</h4>
                  <p className="text-neutral-400">Verified organizations nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
