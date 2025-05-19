import { CartProvider } from "./cartProvider";
import { LoadingProvider } from "./loadingProvider";
import { TransactionsProvider } from "./transactionsProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Provider = ({ children }: any) => {
  return (
    <>
      <CartProvider>
        <TransactionsProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </TransactionsProvider>
      </CartProvider>
    </>
  );
};

export default Provider;
