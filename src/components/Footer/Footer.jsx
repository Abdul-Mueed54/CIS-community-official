import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    // Added 'border-t-4' and 'bg-blue-900' as per your design
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-10">
        
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="src/Logo/CIS-Community-Main-Logo.png" 
                alt="Community logo"
                className="h-24 md:h-32 object-contain"
              />
            </Link>
          </div>
          
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright Text */}
          <div className="text-xs md:text-sm text-blue-100/80 text-center md:text-left">
            © {new Date().getFullYear()} CISCommunityNEDUET. All rights reserved.
          </div>

          {/* Social Icons Grid */}
          <div className="flex space-x-6 justify-center">
            {/* Facebook */}
             <a
                            href="https://www.instagram.com/ciscommunity.official/"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Instagram className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577627304848"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Facebook className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                            </a>
                        <a href="https://www.linkedin.com/company/cis-community-neduet/"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Linkedin className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.youtube.com/@CISCommunityNEDUET"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Youtube className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
          </div>
        </div>
      </div>
    </footer>
  );
}