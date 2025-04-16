
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Executive Pro",
    description: "Refined template for senior leadership positions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "executive",
    price: 39,
    features: ["ATS-Optimized", "Modern Design", "Easy Customization"]
  },
  {
    id: 2,
    name: "Creative Portfolio",
    description: "Stand out with this design-focused layout.",
    image: "https://images.unsplash.com/photo-1517436073-3b1b1cc54f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "creative",
    price: 29,
    features: ["Portfolio Section", "Unique Layout", "Visual Focus"]
  },
  {
    id: 3,
    name: "Modern Minimalist",
    description: "Clean, focused presentation for any industry.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "general",
    price: 19,
    features: ["Clean Design", "Multiple Formats", "Print-Ready"]
  },
  {
    id: 4,
    name: "Technical Expert",
    description: "Showcase technical skills with this structured format.",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "technical",
    price: 34,
    features: ["Skills Matrix", "Project Showcase", "Technical Focus"]
  },
  {
    id: 5,
    name: "Graduate Premium",
    description: "Perfect for early career professionals.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "entry-level",
    price: 24,
    features: ["Education Focus", "Skills Highlight", "Achievement-Oriented"]
  }
];

const categories = [
  { id: "all", name: "All Templates" },
  { id: "executive", name: "Executive" },
  { id: "creative", name: "Creative" },
  { id: "technical", name: "Technical" },
  { id: "general", name: "General" },
  { id: "entry-level", name: "Entry Level" }
];

const TemplateCard = ({ template }: { template: any }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/template/${template.id}`);
  };
  
  return (
    <div className="glass rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="h-48 md:h-64 overflow-hidden">
        <img 
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-medium mb-2">{template.name}</h3>
          <p className="text-muted-foreground">{template.description}</p>
        </div>
        
        <ul className="mb-6 space-y-2">
          {template.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <Check size={16} className="text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-medium">${template.price}</span>
            <span className="text-sm text-muted-foreground">One-time purchase</span>
          </div>
          <button 
            onClick={handleClick}
            className={cn(
              "w-full py-3 bg-primary text-white rounded-lg",
              "hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            )}
          >
            View Template <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === activeCategory);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Resume Templates</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professionally designed templates that make a lasting impression.
            </p>
          </div>
          
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 pb-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Templates;
