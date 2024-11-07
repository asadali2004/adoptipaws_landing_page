import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div >
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Follow Me</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/asadali2004" className="text-green-300 hover:text-white">
              <Github />
            </a>
            </li>
            <li><a href="https://x.com/Asadaaliii?t=lyAmbGUbAwYL1VVUdI-nAw&s=09" className="text-green-300 hover:text-white">
              <Twitter />
            </a></li>
            <li><a href="https://www.linkedin.com/in/ali1609/" className="text-green-300 hover:text-white">
              <Linkedin />
            </a></li>
            <li>
               <a href="https://www.instagram.com/asadaaliii/" className="text-green-300 hover:text-white">
              <Instagram />
            </a>
            </li>
        
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
