import { LoadingProvider } from "./loadingProvider";
import { TransactionsProvider } from "./transactionsProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Provider = ({ children }: any) => {
  return (
    <>
      <TransactionsProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </TransactionsProvider>
    </>
  );
};

export default Provider;
