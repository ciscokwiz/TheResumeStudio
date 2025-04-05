
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "Working with The Resume Studio completely transformed my job search. Within two weeks of using my new resume, I secured three interviews and landed my dream position.",
    date: "March 15, 2025"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Senior Developer",
    company: "Global Systems",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The LinkedIn optimization service helped me increase my profile views by 300% in just one month. The strategic guidance I received was invaluable for my career transition.",
    date: "February 28, 2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Finance Manager",
    company: "Precision Capital",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The personal branding consultation helped me articulate my unique value proposition. I now approach interviews with confidence and clarity about what I bring to the table.",
    date: "February 10, 2025"
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Project Manager",
    company: "Construct Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I was skeptical about investing in a resume service, but it has paid for itself many times over. The quality and attention to detail were exceptional.",
    date: "January 22, 2025"
  },
  {
    id: 5,
    name: "Jennifer Lee",
    position: "HR Director",
    company: "Health Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "As someone who reviews resumes professionally, I was impressed by the quality of the templates and the strategic approach to content. This service helps candidates truly stand out.",
    date: "January 5, 2025"
  },
  {
    id: 6,
    name: "Robert Thompson",
    position: "Sales Director",
    company: "Global Retail Inc.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The resume template I purchased was easy to customize and helped me land interviews with three Fortune 500 companies. The investment was absolutely worth it.",
    date: "December 18, 2024"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Client Success Stories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our services have helped professionals achieve their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass rounded-xl p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="mb-5 italic flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="text-sm text-muted-foreground mt-auto">
                  {testimonial.date}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass rounded-xl p-8 text-center">
            <h2 className="text-2xl font-medium mb-6">Share Your Story</h2>
            <p className="mb-6">We'd love to hear about your experience with our services.</p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Submit Your Testimonial
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
