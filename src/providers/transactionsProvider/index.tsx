import { ITransactionResponse } from "@/interfaces/transactions";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import { transactions } from "@/lib/transactions-store";

interface TransactionsContextType {
  transactionsValues: ITransactionResponse[];
  setTransactionsValues: (transactions: ITransactionResponse[]) => void;
  allTransactions: ITransactionResponse[];
  setAllTransactions: (transactions: ITransactionResponse[]) => void;
  transactionsPaginated: ITransactionResponse[];
  setTransactionsPaginated: (transactions: ITransactionResponse[]) => void;
  pageValues: { currentPage: number; totalPages: number };
  setPageValues: React.Dispatch<
    React.SetStateAction<{ currentPage: number; totalPages: number }>
  >;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined
);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactionsValues, setTransactionsValues] = useState<
    ITransactionResponse[]
  >([]);
  const [allTransactions, setAllTransactions] =
    useState<ITransactionResponse[]>(transactions);
  const [transactionsPaginated, setTransactionsPaginated] = useState<
    ITransactionResponse[]
  >([]);
  const [pageValues, setPageValues] = useState({
    currentPage: 1,
    totalPages: Math.ceil(allTransactions.length / 5),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPaginated = await transactionsService.getAll({ page: 1 });
        setTransactionsValues(dataPaginated);
        setTransactionsPaginated(dataPaginated);
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
        transactionsPaginated,
        setTransactionsPaginated,
        pageValues,
        setPageValues,
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
