
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last updated: April 3, 2025</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
            <p>The Resume Studio Co. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Create an account</li>
              <li>Purchase our services or products</li>
              <li>Contact our customer support</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in our surveys or promotions</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience on our website</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Law enforcement or other third parties when required by law</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">5. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mb-6">
              privacy@resumestudio.co<br />
              The Resume Studio Co.<br />
              123 Career Street<br />
              Professional City, CA 94105
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
