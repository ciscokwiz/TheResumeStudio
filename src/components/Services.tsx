
import { FileText, Linkedin, UserRound, PenTool, BarChart4, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Resume Writing",
    description: "Custom, ATS-optimized resumes crafted to highlight your unique value proposition.",
    icon: FileText
  },
  {
    title: "LinkedIn Optimization",
    description: "Strategic profile enhancements to increase visibility and attract recruiters.",
    icon: Linkedin
  },
  {
    title: "Career Consultancy",
    description: "Personalized guidance to navigate career transitions and advancement opportunities.",
    icon: Compass
  },
  {
    title: "Personal Branding",
    description: "Define and communicate your professional identity across all platforms.",
    icon: UserRound
  },
  {
    title: "Resume Templates",
    description: "Premium, customizable templates designed for maximum impact and readability.",
    icon: PenTool
  },
  {
    title: "LinkedIn Strategy",
    description: "Comprehensive approach to building your professional network and online presence.",
    icon: BarChart4
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const { title, description, icon: Icon } = service;
  
  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 transition-all hover:translate-y-[-5px]",
        "flex flex-col items-start animate-fade-in"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
        <Icon size={24} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive career solutions tailored to your professional goals and aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
