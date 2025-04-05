
import React from 'react';
import CartItem from './CartItem';

interface OrderSummaryProps {
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

const OrderSummary = ({ items }: OrderSummaryProps) => {
  return (
    <div className="glass rounded-xl p-6 mb-8">
      <h2 className="text-xl font-medium mb-4">Order Summary</h2>
      
      <div className="space-y-6">
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
