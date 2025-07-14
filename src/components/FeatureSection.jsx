import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="feture" className="relative mt-32 border-b border-neutral-800/50 min-h-[800px] py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-neutral-900/80 text-green-400 rounded-full h-8 text-sm font-medium px-6 py-2 uppercase tracking-wider border border-green-500/30 backdrop-blur-sm">
            <span className="mr-2">✨</span>
            Features
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-16 tracking-wide font-bold">
            Easily Connect with{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Pets in Need
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Discover powerful tools designed to make pet adoption and animal rescue seamless, 
            efficient, and heartwarming for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 p-8 rounded-2xl border border-neutral-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h5 className="text-xl font-semibold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                  {feature.text}
                </h5>
                
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <div className="inline-flex items-center text-green-400 text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-8 py-4 backdrop-blur-sm">
            <span className="text-green-400 font-medium">Ready to make a difference?</span>
            <a 
              href="http://adoptipaws.tech/" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 py-2 px-6 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
