import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { CartProvider } from './src/context/CartContext';
import { OrderProvider } from './src/context/OrderContext';
export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <AppNavigation />
      </OrderProvider>
    </CartProvider>
  );
}
