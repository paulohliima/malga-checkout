import { ITransactionResponse } from "@/interfaces/transactions";
import * as S from "./style";
import TransactionCard from "@/components/cards/transactionCard";
import { useTransactions } from "@/providers/transactionsProvider";
import { transactionsService } from "@/services/transactionsService";

interface ICardList {
  transactions: ITransactionResponse[];
}

const CardList = ({ transactions }: ICardList) => {
  const {
    transactionsValues,
    setTransactionsValues,
    pageValues,
    setPageValues,
  } = useTransactions();

  const handleLoadMoreTransactions = async () => {
    try {
      setPageValues((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));

      const response = await transactionsService.getAll({
        page: pageValues.currentPage + 1,
      });

      if (response.length === 0) return;

      setTransactionsValues([...transactionsValues, ...response]);
    } catch (e) {
      console.error("Erro ao mudar de página:", e);
    }
  };

  const shouldShowLoadMore = transactions.length % 5 === 0;

  return (
    <S.Container>
      {transactions.map((transaction, index: number) => (
        <TransactionCard transaction={transaction} key={index} />
      ))}

      {shouldShowLoadMore && (
        <S.LoadMore onClick={handleLoadMoreTransactions}>
          Carregar Mais
        </S.LoadMore>
      )}
    </S.Container>
  );
};

export default CardList;
