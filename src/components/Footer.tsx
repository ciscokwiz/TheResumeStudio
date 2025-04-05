
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">The Resume Studio Co.</h3>
            <p className="text-white/70 mb-4">
              Elevating careers through exceptional resumes, personal branding, and strategic career guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Resume Writing</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">LinkedIn Optimization</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Career Consultancy</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Personal Branding</Link></li>
              <li><Link to="/templates" className="text-white/70 hover:text-white transition-colors">Resume Templates</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><Link to="/testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe for career tips and exclusive offers.
            </p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit"
                  className="bg-white text-primary px-4 py-2 rounded-r-md hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} The Resume Studio Co. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-white/70 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/sitemap" className="text-sm text-white/70 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
