import * as S from "./style";
import { Typography } from "@mui/material";
import { MdAssignment } from "react-icons/md";
import CustomTable from "../common/table";
import { ITransactionResponse } from "@/interfaces/transactions";
import CardList from "../cardList";
import useMediaQuery from "@/hooks/useMediaQuery";

interface IListTransactions {
  transactions: ITransactionResponse[];
}

const TransactionsList = ({ transactions }: IListTransactions) => {
  const isMobile = useMediaQuery();

  return (
    <S.Container>
      <S.TitleBox>
        <MdAssignment />
        <Typography variant="h6" fontWeight={500}>
          Transações
        </Typography>
      </S.TitleBox>

      {isMobile ? (
        <CardList transactions={transactions} />
      ) : (
        <CustomTable transactions={transactions} />
      )}
    </S.Container>
  );
};

export default TransactionsList;
