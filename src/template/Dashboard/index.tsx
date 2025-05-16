import * as S from "./styles";
import { transactions } from "@/lib/transactions-store";
import TransactionsList from "@/components/transactionsList";

const DashboardPage: React.FC = () => {
  return (
    <S.Container>
      <TransactionsList transactions={transactions}></TransactionsList>
    </S.Container>
  );
};

export default DashboardPage;
