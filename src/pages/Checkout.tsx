
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCartItems } from "@/constants/checkout";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import OrderTotal from "@/components/checkout/OrderTotal";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  
  const subtotal = mockCartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  
  const handleCheckout = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/payment-success");
    }, 2000);
    
    // In a real implementation, you would call your payment processing API here
    // const response = await fetch('/api/process-payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     paymentMethod,
    //     amount: total,
    //     items: mockCartItems.map(item => ({ id: item.id, price: item.price }))
    //   })
    // });
    //
    // const data = await response.json();
    // if (data.success) {
    //   navigate('/payment-success');
    // } else {
    //   // Show error
    // }
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-3xl font-medium mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary and Payment Method */}
            <div className="lg:col-span-2">
              <OrderSummary items={mockCartItems} />
              <PaymentMethodSelector 
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
            
            {/* Order Total */}
            <div>
              <OrderTotal 
                subtotal={subtotal}
                tax={tax}
                total={total}
                isProcessing={isProcessing}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
