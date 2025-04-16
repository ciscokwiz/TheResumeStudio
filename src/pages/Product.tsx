
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock product data
const products = {
  "resume-writing": {
    title: "Resume Writing",
    description: "Professional resume writing service tailored to your career goals.",
    price: 149,
    features: [
      "ATS-Optimized Content",
      "Professional Layout",
      "Targeted Keywords",
      "Achievement-Focused Content",
      "Modern Design",
      "2 Revisions Included"
    ],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "linkedin-optimization": {
    title: "LinkedIn Optimization",
    description: "Strategic profile enhancements to increase visibility and attract recruiters.",
    price: 129,
    features: [
      "Keyword-Rich Profile",
      "Optimized Headline",
      "Compelling Summary",
      "Skills Assessment",
      "Content Strategy",
      "Networking Recommendations"
    ],
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  // ...add more products as needed
};

// Mock template data
const templates = {
  "1": {
    title: "Executive Pro Template",
    description: "Refined template for senior leadership positions.",
    price: 39,
    features: [
      "ATS-Optimized",
      "Modern Design",
      "Easy Customization",
      "Multiple Color Options",
      "Compatible with Word & Pages",
      "PDF Export"
    ],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "2": {
    title: "Creative Portfolio Template",
    description: "Stand out with this design-focused layout.",
    price: 29,
    features: [
      "Visual Portfolio Section",
      "Creative Layout",
      "Skills Showcase",
      "ATS Compatible",
      "Fully Editable",
      "Video Guide Included"
    ],
    image: "https://images.unsplash.com/photo-1517436073-3b1b1cc54f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  "3": {
    title: "Modern Minimalist",
    description: "Clean, focused presentation for any industry.",
    price: 19,
    features: [
      "Clean Design",
      "Multiple Formats",
      "Print-Ready",
      "ATS Compatible",
      "Simple Layout",
      "Free Updates"
    ],
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "4": {
    title: "Technical Expert",
    description: "Showcase technical skills with this structured format.",
    price: 34,
    features: [
      "Skills Matrix",
      "Project Showcase",
      "Technical Focus",
      "Code Snippet Section",
      "Github Integration",
      "Developer-friendly Layout"
    ],
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "5": {
    title: "Graduate Premium",
    description: "Perfect for early career professionals.",
    price: 24,
    features: [
      "Education Focus",
      "Skills Highlight",
      "Achievement-Oriented",
      "Entry-Level Positioning",
      "Career Objective Section",
      "Interview Tips Guide"
    ],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
};

const Product = () => {
  const { productType, id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    console.log("Fetching product:", { productType, id });
    
    setTimeout(() => {
      if (productType === "template" && id) {
        console.log("Looking for template with ID:", id);
        const templateProduct = templates[id as keyof typeof templates];
        if (templateProduct) {
          console.log("Template found:", templateProduct);
          setProduct(templateProduct);
        } else {
          console.log("Template not found with ID:", id);
          navigate("/404");
        }
      } else if (id && products[id as keyof typeof products]) {
        console.log("Regular product found:", products[id as keyof typeof products]);
        setProduct(products[id as keyof typeof products]);
      } else {
        console.log("Product not found with ID:", id);
        // Product not found
        navigate("/404");
      }
      setLoading(false);
    }, 500);
  }, [productType, id, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading product details...</div>
      </div>
    );
  }
  
  if (!product) return null;
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-medium mb-4">{product.title}</h1>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-medium">${product.price}</span>
                <span className="text-muted-foreground ml-2">USD</span>
              </div>
              
              <div className="glass rounded-xl p-6 mb-8">
                <h3 className="text-lg font-medium mb-4">What's included:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1">
                        <Check size={16} className="text-green-500" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={cn(
                  "w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg",
                  "hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                )}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;
