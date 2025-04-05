
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last updated: April 3, 2025</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using The Resume Studio Co. website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">2. Services Description</h2>
            <p>The Resume Studio Co. provides resume writing, LinkedIn optimization, career consultancy, and personal branding services. We also offer professionally designed resume templates for purchase.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">3. User Accounts</h2>
            <p>You may need to create an account to use certain features of our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">4. Payment Terms</h2>
            <p>All purchases are final and non-refundable unless otherwise specified at the time of purchase. We reserve the right to change our pricing at any time without prior notice.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">5. Intellectual Property</h2>
            <p>All content, features, and functionality on our website, including text, graphics, logos, icons, images, and software, are owned by The Resume Studio Co. and are protected by United States and international copyright, trademark, and other intellectual property laws.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">6. User Content</h2>
            <p>By submitting content to us, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content in connection with our services.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">7. Limitation of Liability</h2>
            <p>In no event shall The Resume Studio Co. be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">8. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. It is your responsibility to check our website periodically for changes.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mb-6">
              terms@resumestudio.co<br />
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

export default Terms;
