
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="glass rounded-xl p-10 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            
            <h1 className="text-3xl font-medium mb-4">Payment Successful!</h1>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Thank you for your purchase. Your order has been processed successfully and you will receive a confirmation email shortly.
            </p>
            
            <div className="mb-10 glass rounded-lg p-6 mx-auto max-w-md">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Order Number:</span>
                <span className="font-medium">ORD-2025-04-03-789</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Date:</span>
                <span className="font-medium">April 3, 2025</span>
              </div>
              <div className="border-t border-b py-2 my-2 flex justify-between">
                <span>Total Amount:</span>
                <span className="font-medium">$188.00</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Go to Dashboard
              </button>
              
              <button 
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-transparent border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
