
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Templates", path: "/templates" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Resume Writing", path: "/product/resume-writing" },
        { name: "LinkedIn Optimization", path: "/product/linkedin-optimization" },
        { name: "Career Consultancy", path: "/product/career-consultancy" },
        { name: "Personal Branding", path: "/product/personal-branding" }
      ]
    },
    {
      title: "Templates",
      links: [
        { name: "Executive Templates", path: "/templates?category=executive" },
        { name: "Creative Templates", path: "/templates?category=creative" },
        { name: "Technical Templates", path: "/templates?category=technical" },
        { name: "Entry-Level Templates", path: "/templates?category=entry-level" }
      ]
    },
    {
      title: "User Account",
      links: [
        { name: "Login", path: "/auth/login" },
        { name: "Sign Up", path: "/auth/signup" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Account Settings", path: "/dashboard/settings" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-10">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="text-primary hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
