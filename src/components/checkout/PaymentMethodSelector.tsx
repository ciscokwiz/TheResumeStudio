
import React from 'react';
import { CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentMethodSelector = ({ paymentMethod, setPaymentMethod }: PaymentMethodSelectorProps) => {
  return (
    <div className="glass rounded-xl p-6">
      <h2 className="text-xl font-medium mb-4">Payment Method</h2>
      
      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="credit-card" 
              checked={paymentMethod === "credit-card"}
              onChange={() => setPaymentMethod("credit-card")}
              className="hidden" 
            />
            <div className={cn(
              "w-5 h-5 rounded-full border flex items-center justify-center",
              paymentMethod === "credit-card" ? "border-primary" : "border-gray-300"
            )}>
              {paymentMethod === "credit-card" && (
                <div className="w-3 h-3 bg-primary rounded-full" />
              )}
            </div>
            <span>Credit Card</span>
          </div>
          <CreditCard className="text-gray-500" size={20} />
        </label>
        
        <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="paypal" 
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="hidden" 
            />
            <div className={cn(
              "w-5 h-5 rounded-full border flex items-center justify-center",
              paymentMethod === "paypal" ? "border-primary" : "border-gray-300"
            )}>
              {paymentMethod === "paypal" && (
                <div className="w-3 h-3 bg-primary rounded-full" />
              )}
            </div>
            <span>PayPal</span>
          </div>
          <div className="text-[#003087] font-semibold">
            PayPal
          </div>
        </label>
      </div>
      
      {paymentMethod === "credit-card" && (
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
