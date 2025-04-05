
import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CartItem = ({ id, name, price, image }: CartItemProps) => {
  return (
    <div key={id} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{name}</h3>
        <p className="text-lg mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
