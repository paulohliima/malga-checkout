import * as S from "./style";

import { IoOptionsOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { TfiStatsUp, TfiStatsDown } from "react-icons/tfi";

import CardList from "../cardList";
import CustomTable from "../common/table";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ITransactionResponse } from "@/interfaces/transactions";
import FilterInputs from "../common/forms/filterInputs";
import { useEffect, useState } from "react";
import { useTransactions } from "@/providers/transactionsProvider";
import { AnimatePresence, motion } from "framer-motion";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import CustomInput from "../common/input";
import { useLoading } from "@/providers/loadingProvider";
import CustomButton from "../common/button";
import InfoCard from "../cards/infoCard";

interface IListTransactions {
  transactions: ITransactionResponse[];
}

const TransactionsList = ({ transactions }: IListTransactions) => {
  const isMobile = useMediaQuery();
  const { loading, setLoading } = useLoading();

  const { allTransactions, setTransactionsValues } = useTransactions();
  const [openMenuFilter, setOpenMenuFilter] = useState(false);

  const [inputValueId, setInputValueId] = useState("");
  const [searchedValue, setSearchedValue] = useState(false);

  const [countStatsValues, setCountStatsValues] = useState({
    authorized: 0,
    failed: 0,
  });

  const [selectFilterByStatus, setSelectFilterByStatus] = useState("");

  useEffect(() => {
    if (!allTransactions?.length) return;

    const calculatedValues = allTransactions.reduce(
      (acc, transaction) => {
        if (transaction.status === "authorized") {
          acc.authorized += 1;
        } else if (transaction.status === "failed") {
          acc.failed += 1;
        }
        return acc;
      },
      { authorized: 0, failed: 0 }
    );

    setCountStatsValues(calculatedValues);
  }, [allTransactions]);

  const handleRefreshList = async () => {
    setOpenMenuFilter(false);
    try {
      const data = await transactionsService.getAll();
      setTransactionsValues(data);
      setLoading(true);
      setTimeout(() => {
        setTransactionsValues(data);
        setLoading(false);
      }, 300);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const handleClearFilter = () => {
    setTransactionsValues(allTransactions);
    setInputValueId("");
    setSearchedValue(false);
    setSelectFilterByStatus("");
  };

  const handleSearchById = () => {
    const transactionsFilteredById = allTransactions.filter(
      (tx) => tx.id === inputValueId
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    setSearchedValue(true);
    setTransactionsValues(transactionsFilteredById);
  };

  const handleSelectFilterStatus = (type: string) => {
    let transactionsFilteredById;

    switch (type) {
      case "authorized":
        transactionsFilteredById = allTransactions.filter(
          (tx) => tx.status === "authorized"
        );
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        setSearchedValue(true);
        setSelectFilterByStatus("authorized");
        setTransactionsValues(transactionsFilteredById);
        break;
      case "failed":
        transactionsFilteredById = allTransactions.filter(
          (tx) => tx.status === "failed"
        );
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        setSearchedValue(true);
        setSelectFilterByStatus("failed");
        setTransactionsValues(transactionsFilteredById);
        break;
      default:
        break;
    }
  };

  const handleOpenMenuFilter = () => {
    setOpenMenuFilter(!openMenuFilter);
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.Row>
          <MdOutlinePayments />
          <S.Title>TRANSAÇÕES</S.Title>
        </S.Row>
      </S.TitleBox>

      {isMobile && <S.Divider />}

      <AnimatePresence>
        {openMenuFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.ContainerCardsInfo>
              <InfoCard
                label="Authorizados:"
                icon={<TfiStatsUp />}
                value={countStatsValues.authorized}
                type="success"
                selected={selectFilterByStatus === "authorized"}
                onClick={() => handleSelectFilterStatus("authorized")}
              />
              <InfoCard
                label="Bloqueados:"
                icon={<TfiStatsDown />}
                value={countStatsValues.failed}
                type="failed"
                selected={selectFilterByStatus === "failed"}
                onClick={() => handleSelectFilterStatus("failed")}
              />
            </S.ContainerCardsInfo>
            <FilterInputs handleClearFilter={handleClearFilter} />
            {isMobile && <S.Divider />}
            <S.Row>
              <IoIosArrowUp
                style={{
                  width: "40px",
                  height: "40px",
                  color: "var(--color-profile-2)",
                  margin: "0 auto",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
                onClick={handleOpenMenuFilter}
              />
            </S.Row>
          </motion.div>
        )}
      </AnimatePresence>

      {!openMenuFilter && (
        <S.ContainerInputSearch>
          <S.RowInputSearch>
            <S.RefreshIcon
              onClick={handleRefreshList}
              $loading={loading}
              style={{
                width: "30px",
                height: "30px",
                color: "var(--color-profile-2)",
              }}
            />
            <S.Column>
              <CustomInput
                label="Buscar pelo Id"
                value={inputValueId}
                searchIcon
                onClickSearchIcon={handleSearchById}
                onChange={(e) => setInputValueId(e)}
              />
            </S.Column>

            <IoOptionsOutline
              style={{
                width: "35px",
                height: "35px",
                color: "var(--color-profile-2)",
                cursor: "pointer",
              }}
              onClick={handleOpenMenuFilter}
            />
          </S.RowInputSearch>
          {searchedValue && (
            <CustomButton
              variant="text"
              label="Limpar Filtros"
              color="var(--color-profile-1)"
              onClick={handleClearFilter}
            />
          )}
        </S.ContainerInputSearch>
      )}

      {isMobile ? (
        <>
          <CardList transactions={transactions} />
        </>
      ) : (
        <CustomTable transactions={transactions} />
      )}
    </S.Container>
  );
};

export default TransactionsList;
