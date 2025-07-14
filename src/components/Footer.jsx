import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Github, Twitter, Linkedin, Instagram, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-red-400 mr-3" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                AdoptiPaws
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              Connecting animals with loving homes through technology and compassion. 
              Every adoption creates a beautiful story of love and companionship.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-neutral-300">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span>contact@adoptipaws.tech</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <MapPin className="w-4 h-4 mr-3 text-green-400" />
                <span>Making a difference worldwide</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-neutral-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-neutral-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/asadali2004" 
                  className="w-10 h-10 bg-neutral-800 hover:bg-green-500/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-green-400 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://x.com/Asadaaliii?t=lyAmbGUbAwYL1VVUdI-nAw&s=09" 
                  className="w-10 h-10 bg-neutral-800 hover:bg-blue-500/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ali1609/" 
                  className="w-10 h-10 bg-neutral-800 hover:bg-blue-600/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-blue-500 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com/asadaaliii/" 
                  className="w-10 h-10 bg-neutral-800 hover:bg-pink-500/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-pink-400 transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-neutral-400 text-sm hidden md:block">Stay updated:</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-neutral-800 border border-neutral-700 rounded-l-lg px-4 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-r-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-neutral-800/50">
            <p className="text-neutral-400 text-sm">
              © 2024 AdoptiPaws. Made with{" "}
              <Heart className="w-4 h-4 text-red-400 inline mx-1" />
              by{" "}
              <a href="https://github.com/asadali2004" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                Asad Ali
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
