import { ICustomer, IItem, IPaymentMethod } from "@/interfaces/transactions";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartContextType {
  customer: ICustomer | undefined;
  setCustomer: (Customer: ICustomer) => void;
  payment: IPaymentMethod | undefined;
  setPayment: (Payment: IPaymentMethod) => void;
  mockupProducts: IItem[];
  setMockupProducts: (Item: IItem[]) => void;
  totalAmount: number;
  setTotalAmount: (Total: number) => void;
}

const productList = [
  { name: "Notebook", amount: 4000 },
  { name: "Mouse", amount: 120 },
  { name: "Teclado", amount: 200 },
  { name: "Monitor", amount: 1500 },
  { name: "Fone de Ouvido", amount: 300 },
  { name: "Cadeira Executiva", amount: 1200 },
  { name: "HD Externo", amount: 400 },
];

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomCart = (): IItem[] => {
  const shuffled = [...productList].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, getRandomInt(2, 6));
  return selected.map((product) => ({
    name: product.name,
    amount: product.amount,
    quantity: getRandomInt(1, 4),
  }));
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [customer, setCustomer] = useState<ICustomer | undefined>(undefined);
  const [payment, setPayment] = useState<IPaymentMethod | undefined>(undefined);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [mockupProducts, setMockupProducts] = useState<IItem[]>([]);

  useEffect(() => {
    const randomCart = generateRandomCart();
    setMockupProducts(randomCart);
  }, []);

  useEffect(() => {
    const total = mockupProducts.reduce((acc, item) => {
      return acc + item.amount * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [mockupProducts]);

  return (
    <CartContext.Provider
      value={{
        customer,
        setCustomer,
        payment,
        setPayment,
        mockupProducts,
        setMockupProducts,
        totalAmount,
        setTotalAmount,
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
