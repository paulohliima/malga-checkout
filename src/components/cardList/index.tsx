import { ITransactionResponse } from "@/interfaces/transactions";
import * as S from "./style";
import TransactionCard from "../transactionCard";

interface ICardList {
  transactions: ITransactionResponse[];
}

const CardList = ({ transactions }: ICardList) => {
  return (
    <S.Container>
      {transactions.map((transaction, index: number) => (
        <TransactionCard transaction={transaction} key={index} />
      ))}
    </S.Container>
  );
};

export default CardList;
