import { testimonials } from "../constants";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="mt-32 border-t py-20 border-neutral-900/50" id="test">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-neutral-900/80 text-green-400 rounded-full h-8 text-sm font-medium px-6 py-2 uppercase tracking-wider border border-green-500/30 backdrop-blur-sm">
            <span className="mr-2">💬</span>
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-8 mb-6 font-bold">
            What People Are{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Saying About Us
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Real stories from our community of adopters, NGOs, and animal lovers who are making a difference every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 rounded-2xl p-8 border border-neutral-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-green-400/60" />
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-300 leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-full border-2 border-green-500/30 object-cover"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm text-neutral-400 italic">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-500/30 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Join Our Success Stories</h3>
              <p className="text-neutral-400">Be part of a community that's saving lives every day</p>
            </div>
            <a 
              href="http://adoptipaws.tech/" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 py-3 px-8 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 whitespace-nowrap"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
