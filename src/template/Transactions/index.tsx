import * as S from "./styles";

import TransactionsList from "@/components/transactionsList";
import { useTransactions } from "@/providers/transactionsProvider";

const DashboardPage: React.FC = () => {
  const { transactionsValues } = useTransactions();

  return (
    <S.Container>
      <TransactionsList transactions={transactionsValues}></TransactionsList>
    </S.Container>
  );
};

export default DashboardPage;
