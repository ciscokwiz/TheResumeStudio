
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Executive Pro",
    description: "Refined template for senior leadership positions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Creative Portfolio",
    description: "Stand out with this design-focused layout.",
    image: "https://images.unsplash.com/photo-1517436073-3b1b1cc54f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Modern Minimalist",
    description: "Clean, focused presentation for any industry.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    name: "Technical Expert",
    description: "Showcase technical skills with this structured format.",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    name: "Graduate Premium",
    description: "Perfect for early career professionals.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];

const Templates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? templates.length - 3 : prev - 1));
  };
  
  const showNext = () => {
    setCurrentIndex((prev) => (prev === templates.length - 3 ? 0 : prev + 1));
  };
  
  const handleTemplateClick = (id: number) => {
    navigate(`/auth/login?redirect=/product/template/${id}`);
  };
  
  return (
    <section id="templates" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Premium Resume Templates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professionally designed templates that make a lasting impression.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Slider */}
          <div className="hidden md:block">
            <div className="flex gap-6 transition-all duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {templates.map((template) => (
                <div key={template.id} className="min-w-[33.33%] px-3">
                  <div className="glass rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTemplateClick(template.id)}>
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{template.name}</h3>
                      <p className="text-muted-foreground mb-4">{template.description}</p>
                      <span 
                        className="flex items-center text-primary text-sm gap-2 hover:underline"
                      >
                        View Template <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center"
              onClick={showPrev}
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center"
              onClick={showNext}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {templates.slice(0, 3).map((template) => (
              <div key={template.id} className="glass rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTemplateClick(template.id)}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <span 
                    className="flex items-center text-primary text-sm gap-2 hover:underline"
                  >
                    View Template <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/templates" 
            className={cn(
              "px-6 py-3 bg-transparent border border-gray-200",
              "text-primary rounded-full hover:bg-gray-50 inline-flex",
              "items-center gap-2 transition-colors"
            )}
          >
            View All Templates
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Templates;
