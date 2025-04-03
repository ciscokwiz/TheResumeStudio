
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "Working with The Resume Studio completely transformed my job search. Within two weeks of using my new resume, I secured three interviews and landed my dream position."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Senior Developer",
    company: "Global Systems",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The LinkedIn optimization service helped me increase my profile views by 300% in just one month. The strategic guidance I received was invaluable for my career transition."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Finance Manager",
    company: "Precision Capital",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The personal branding consultation helped me articulate my unique value proposition. I now approach interviews with confidence and clarity about what I bring to the table."
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Project Manager",
    company: "Construct Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I was skeptical about investing in a resume service, but it has paid for itself many times over. The quality and attention to detail were exceptional."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const showNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our services have helped professionals achieve their career goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="mb-5 italic text-lg">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <p className="font-medium">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentIndex ? "bg-primary scale-100" : "bg-gray-300 scale-75"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center md:flex"
            onClick={showPrev}
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center md:flex"
            onClick={showNext}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
