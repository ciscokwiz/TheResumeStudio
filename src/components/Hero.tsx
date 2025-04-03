
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-rose-50 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 animate-fade-in">
            Craft Your Career Story with Precision
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A boutique career management and branding agency helping professionals 
            present their best selves to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#services" 
              className={cn(
                "px-6 py-3 bg-primary text-white rounded-full",
                "flex items-center justify-center gap-2",
                "hover:bg-primary/90 transition-colors w-full sm:w-auto"
              )}
            >
              Explore Our Services
              <ArrowRight size={16} />
            </a>
            
            <a 
              href="#templates" 
              className={cn(
                "px-6 py-3 bg-transparent border border-gray-200",
                "text-primary rounded-full hover:bg-gray-50",
                "transition-colors w-full sm:w-auto"
              )}
            >
              Browse Templates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
