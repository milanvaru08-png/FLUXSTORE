import React, { createContext, useContext, useState } from "react";

export type OrderItem = {
  id: string;
  date: string;
  items: any[];
  subtotal: number;
  status: "Pending" | "Delivered" | "Cancelled";
};

type OrderContextType = {
  orders: OrderItem[];
  addOrder: (order: OrderItem) => void;
};

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: any) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const addOrder = (order: OrderItem) => {
    setOrders(prev => [order, ...prev]); // newest first
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }
  return context;
};
