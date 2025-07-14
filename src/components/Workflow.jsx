import { CheckCircle2, ArrowRight } from "lucide-react";
import codeImg from "../assets/Dog.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-32 border-t py-20 border-neutral-900/50" id="workflow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-neutral-900/80 text-green-400 rounded-full h-8 text-sm font-medium px-6 py-2 uppercase tracking-wider border border-green-500/30 backdrop-blur-sm">
            <span className="mr-2">⚡</span>
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-8 tracking-wide font-bold">
            How AdoptiPaws{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Works
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Our streamlined process makes it simple to save lives and find loving homes for pets in need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-8 rounded-3xl border border-neutral-700/50 backdrop-blur-sm">
              <img 
                src={codeImg} 
                alt="Happy adopted dog" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-8 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Success Story</h3>
                  <p className="text-sm opacity-90">Every adoption creates a beautiful story of love and companionship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {checklistItems.map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start space-x-6 p-6 rounded-2xl border border-neutral-700/30 hover:border-green-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-emerald-500/5 backdrop-blur-sm">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-400 font-bold">{index + 1}</span>
                    </div>
                    {index < checklistItems.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-green-500/50 to-transparent"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h5 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <div className="inline-flex items-center text-green-400 text-sm font-medium">
                        View details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-neutral-800/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-neutral-400 text-sm">Simple Steps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-neutral-400 text-sm">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-neutral-400 text-sm">Verified NGOs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">Fast</div>
            <div className="text-neutral-400 text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
