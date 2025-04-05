
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when scrolling occurs
  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMobileMenuOpen]);
  
  return (
    <header>
      {/* Fixed navbar that doesn't cause content overlay */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out",
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="text-xl md:text-2xl font-medium tracking-tight flex items-center">
            The Resume <span className="inline-flex relative mx-1">Studio <span className="absolute inset-0 bg-primary/10 animate-pulse rounded-sm"></span></span> Co.
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-sm hover:text-black/70 transition-colors">Services</Link>
            <Link to="/templates" className="text-sm hover:text-black/70 transition-colors">Templates</Link>
            <Link to="/about" className="text-sm hover:text-black/70 transition-colors">About</Link>
            <Link to="/contact" className="text-sm hover:text-black/70 transition-colors">Contact</Link>
            <Link 
              to="/auth/login" 
              className="px-5 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Separate mobile menu that slides up from bottom - not fixed to viewport */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-30 transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <Link 
              to="/services" 
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/templates" 
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/about" 
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/auth/login" 
              className="w-full text-center px-5 py-3 bg-primary text-white rounded-full text-lg hover:bg-primary/90 transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
