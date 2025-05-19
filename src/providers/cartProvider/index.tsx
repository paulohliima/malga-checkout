import { ICustomer, IItem, IPaymentMethod } from "@/interfaces/transactions";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  customer: ICustomer | undefined;
  setCustomer: (Customer: ICustomer) => void;
  payment: IPaymentMethod | undefined;
  setPayment: (Payment: IPaymentMethod) => void;
  mockupProducts: IItem[];
  setMockupProducts: (Item: IItem[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [customer, setCustomer] = useState<ICustomer | undefined>();
  const [payment, setPayment] = useState<IPaymentMethod | undefined>();

  const [mockupProducts, setMockupProducts] = useState([
    { name: "Notebook", quantity: 1, amount: 8000 },
    { name: "Mouse", quantity: 3, amount: 120 },
    { name: "Teclado", quantity: 1, amount: 120 },
  ]);

  return (
    <CartContext.Provider
      value={{
        customer,
        setCustomer,
        payment,
        setPayment,
        mockupProducts,
        setMockupProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
