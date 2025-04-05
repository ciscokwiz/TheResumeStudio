
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderTotalProps {
  subtotal: number;
  tax: number;
  total: number;
  isProcessing: boolean;
  onCheckout: () => void;
}

const OrderTotal = ({ subtotal, tax, total, isProcessing, onCheckout }: OrderTotalProps) => {
  return (
    <div className="glass rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-medium mb-4">Order Total</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3 flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button 
        onClick={onCheckout}
        disabled={isProcessing}
        className={cn(
          "w-full mt-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors",
          isProcessing 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-primary text-white hover:bg-primary/90"
        )}
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          <>
            Complete Order
            <Check size={18} />
          </>
        )}
      </button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        By completing your purchase, you agree to our{" "}
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
      </p>
    </div>
  );
};

export default OrderTotal;
