
import { BookOpen, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
              Boutique Career Management & Branding
            </h2>
            
            <p className="text-muted-foreground mb-6">
              The Resume Studio Co. is a premium career services agency dedicated to helping 
              professionals present their authentic professional narrative with clarity and impact.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Founded on the principle that every career journey is unique, we combine industry 
              expertise with personalized attention to help you stand out in today's competitive 
              job market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-1">Expertise</h4>
                <p className="text-sm text-muted-foreground">Industry-leading knowledge</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                  <Award size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-1">Quality</h4>
                <p className="text-sm text-muted-foreground">Meticulous attention to detail</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                  <Users size={20} className="text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-1">Results</h4>
                <p className="text-sm text-muted-foreground">Client success focus</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-rose-50 rounded-full blur-2xl opacity-60" />
            </div>
            
            <div className={cn(
              "glass rounded-2xl overflow-hidden",
              "transition-transform hover:translate-y-[-5px]"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Career professional working on resume"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
