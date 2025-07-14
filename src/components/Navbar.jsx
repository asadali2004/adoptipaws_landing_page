import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logofinal2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-lg bg-neutral-900/80 border-b border-green-500/30 shadow-lg shadow-green-500/10' 
        : 'backdrop-blur-lg border-b border-neutral-700/80'
    }`}>
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 group">
            <div className="relative">
              <img className="h-12 w-12 mr-3 rounded-full border-2 border-green-500/30 group-hover:border-green-400 transition-all duration-300" src={logo} alt="Logo" />
              <div className="absolute -top-1 -right-1">
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </div>
            </div>
            <span className="text-2xl tracking-tight font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              AdoptiPaws
            </span>
          </div>
          
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="relative py-2 px-4 rounded-lg transition-all duration-300 hover:text-green-400 hover:bg-green-500/10 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="http://adoptipaws.tech/"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-2 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              Get Started
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button 
              onClick={toggleNavbar}
              className="p-2 rounded-lg hover:bg-green-500/10 transition-colors duration-300"
            >
              {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900/95 backdrop-blur-lg w-full p-8 flex flex-col justify-center items-center lg:hidden border-t border-green-500/20 animate-slide-up">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="text-center">
                  <a 
                    href={item.href}
                    className="text-lg py-3 px-6 rounded-lg hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 block"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a 
                href="http://adoptipaws.tech/"
                className="bg-gradient-to-r from-green-500 to-emerald-600 py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;