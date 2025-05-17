import { ITransactionResponse } from "@/interfaces/transactions";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { transactions } from "@/lib/transactions-store";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";

interface TransactionsContextType {
  transactionsValues: ITransactionResponse[];
  setTransactionsValues: (transactions: ITransactionResponse[]) => void;
  allTransactions: ITransactionResponse[];
  setAllTransactions: (transactions: ITransactionResponse[]) => void;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined
);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactionsValues, setTransactionsValues] = useState(transactions);
  const [allTransactions, setAllTransactions] = useState(transactions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await transactionsService.getAll();
        setAllTransactions(data);
        setTransactionsValues(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error("Erro desconhecido");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactionsValues,
        setTransactionsValues,
        allTransactions,
        setAllTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
