
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <div className="pt-24 section-padding flex-grow">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A boutique career management agency helping professionals present their best selves to the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-medium mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At The Resume Studio Co., we believe that everyone deserves to have their 
                professional story told in a way that resonates with potential employers and 
                opens doors to new opportunities.
              </p>
              <p className="text-muted-foreground">
                Our mission is to empower professionals at all stages of their career journey 
                with the tools, resources, and expertise they need to stand out in a competitive 
                job market and land roles that align with their aspirations and values.
              </p>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Professional working on resume"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 glass rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Career technology tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-medium mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                We take a holistic approach to career development, focusing not just on 
                creating beautiful documents, but on helping you clarify your professional 
                narrative and communicate your value effectively.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced career consultants, writers, and designers work 
                collaboratively to ensure that every aspect of your professional presence—from 
                your resume to your LinkedIn profile to your interview skills—is polished, 
                consistent, and compelling.
              </p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We hold ourselves to the highest standards in everything we do, from customer 
                  service to the quality of our deliverables.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe that the most effective career strategy is one that honors your 
                  unique strengths, values, and aspirations.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the cutting edge of industry trends and technologies to ensure 
                  our clients have the most effective tools at their disposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
