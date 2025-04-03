
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Linkedin, UserRound, PenTool, BarChart4, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "resume-writing",
    title: "Resume Writing",
    description: "Custom, ATS-optimized resumes crafted to highlight your unique value proposition.",
    icon: FileText,
    price: 149,
    features: ["ATS Optimization", "Professional Layout", "Keyword Enhancement", "1 Revision"]
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Optimization",
    description: "Strategic profile enhancements to increase visibility and attract recruiters.",
    icon: Linkedin,
    price: 129,
    features: ["Profile Enhancement", "Summary Writing", "Keyword Integration", "Engagement Strategy"]
  },
  {
    id: "career-consultancy",
    title: "Career Consultancy",
    description: "Personalized guidance to navigate career transitions and advancement opportunities.",
    icon: Compass,
    price: 199,
    features: ["1-Hour Consultation", "Career Path Planning", "Industry Insights", "Follow-up Session"]
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    description: "Define and communicate your professional identity across all platforms.",
    icon: UserRound,
    price: 249,
    features: ["Brand Strategy", "Visual Identity", "Digital Presence", "Content Strategy"]
  },
  {
    id: "resume-templates",
    title: "Resume Templates",
    description: "Premium, customizable templates designed for maximum impact and readability.",
    icon: PenTool,
    price: 29,
    features: ["Instant Download", "ATS Compatible", "Easy Customization", "Multiple Formats"]
  },
  {
    id: "linkedin-strategy",
    title: "LinkedIn Strategy",
    description: "Comprehensive approach to building your professional network and online presence.",
    icon: BarChart4,
    price: 179,
    features: ["Network Analysis", "Content Calendar", "Engagement Plan", "Performance Metrics"]
  }
];

const ServiceCard = ({ service }: { service: any }) => {
  const { title, description, icon: Icon, price, features } = service;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/auth/login?redirect=/product/${service.id}`);
  };
  
  return (
    <div 
      className={cn(
        "glass rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer",
        "flex flex-col relative overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
          <Icon size={24} className="text-primary" />
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mt-auto">
          <p className="text-2xl font-medium">${price}</p>
          <p className="text-sm text-muted-foreground">One-time payment</p>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-primary/95 text-white p-6 flex flex-col justify-between",
          "transition-transform duration-300",
          isHovered ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div>
          <h3 className="text-xl font-medium mb-4">{title}</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full py-3 bg-white text-primary rounded-lg font-medium mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career solutions tailored to your professional goals and aspirations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
