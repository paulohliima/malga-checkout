import * as S from "./style";

import { TbFilterDown } from "react-icons/tb";

import { MdFormatListBulleted } from "react-icons/md";

import CardList from "../cardList";
import CustomTable from "../common/table";
import PullToRefresh from "../pullToRefresh";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ITransactionResponse } from "@/interfaces/transactions";
import FilterInputs from "../common/forms/filterInputs";
import { useState } from "react";
import { useTransactions } from "@/providers/transactionsProvider";
import { AnimatePresence, motion } from "framer-motion";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";

interface IListTransactions {
  transactions: ITransactionResponse[];
}

const TransactionsList = ({ transactions }: IListTransactions) => {
  const isMobile = useMediaQuery();
  const { setTransactionsValues } = useTransactions();
  const [openMenuFilter, setOpenMenuFilter] = useState(false);

  const handleRefreshList = async () => {
    setOpenMenuFilter(false);
    try {
      const data = await transactionsService.getAll();
      setTransactionsValues(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const handleOpenMenuFilter = () => {
    setOpenMenuFilter(!openMenuFilter);
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.Row>
          <MdFormatListBulleted />
          <S.Title>TRANSAÇÕES</S.Title>
        </S.Row>
        <TbFilterDown
          style={{
            width: "30px",
            height: "30px",
            alignSelf: "end",
            color: "#006f7d",
          }}
          onClick={handleOpenMenuFilter}
        />
      </S.TitleBox>

      <AnimatePresence>
        {openMenuFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FilterInputs />
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile && <S.Divider />}

      {isMobile ? (
        <>
          <PullToRefresh onRefresh={handleRefreshList}>
            <CardList transactions={transactions} />
          </PullToRefresh>
        </>
      ) : (
        <CustomTable transactions={transactions} />
      )}
    </S.Container>
  );
};

export default TransactionsList;
