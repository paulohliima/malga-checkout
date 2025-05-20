import * as S from "./style";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, Resolver, useForm } from "react-hook-form";

import { BiError } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { TbFaceIdError } from "react-icons/tb";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import CardList from "../cardList";
import InfoCard from "../cards/infoCard";
import CustomTable from "../common/table";
import CustomInput from "../common/input";
import CustomButton from "../common/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import FilterInputs from "../common/forms/filterInputs";
import { useLoading } from "@/providers/loadingProvider";
import { useTransactions } from "@/providers/transactionsProvider";
import { transactionsService } from "@/services/transactionsService";
import { FilterSearchData, searchSchema } from "@/schemas/filterSchema";
import { isAxiosError } from "axios";

const TransactionsList = () => {
  const isMobile = useMediaQuery(1023);
  const { loading, setLoading } = useLoading();

  const {
    allTransactions,
    transactionsValues,
    setTransactionsValues,
    setPageValues,
    setTransactionsPaginated,
  } = useTransactions();
  const [openMenuFilter, setOpenMenuFilter] = useState(false);

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
      const data = await transactionsService.getAll({ page: 1 });
      setLoading(true);
      setTimeout(() => {
        setTransactionsValues(data);
        setTransactionsPaginated(data);
        setPageValues((prev) => ({
          ...prev,
          currentPage: 1,
        }));
        setLoading(false);
      }, 300);
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        const message = e.response?.data?.message || "Erro na requisição";
        toast.error(message);
      } else if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const handleClearFilter = async () => {
    try {
      const data = await transactionsService.getAll({ page: 1 });
      setLoading(true);
      setTimeout(() => {
        setTransactionsValues(data);
        setTransactionsPaginated(data);
        setPageValues((prev) => ({
          ...prev,
          currentPage: 1,
        }));
        setLoading(false);
        setOpenMenuFilter(false);
        setSearchedValue(false);
        setSelectFilterByStatus("");
        setPageValues((prev) => ({
          ...prev,
          currentPage: 1,
        }));
        reset();
      }, 300);
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        const message = e.response?.data?.message || "Erro na requisição";
        toast.error(message);
      } else if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const handleSearchById = (data: FilterSearchData) => {
    const { inputValue } = data;

    const transactionsFilteredById = allTransactions.filter(
      (tx) => tx.id === inputValue
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
        setOpenMenuFilter(false);
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
        setOpenMenuFilter(false);
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

  const { handleSubmit, control, reset } = useForm<FilterSearchData>({
    resolver: yupResolver(searchSchema) as Resolver<FilterSearchData>,
    defaultValues: {
      inputValue: "",
    },
  });

  return (
    <S.Container>
      <S.TitleBox>
        <S.Row>
          <S.IconTransactions />
          <S.Title>TRANSAÇÕES</S.Title>
        </S.Row>
      </S.TitleBox>

      {isMobile && <S.Divider />}

      <AnimatePresence>
        {openMenuFilter && isMobile ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.ContainerCardsInfo>
              <InfoCard
                label="Autorizados:"
                icon={<IoIosCheckmarkCircleOutline />}
                value={countStatsValues.authorized}
                type="success"
                selected={selectFilterByStatus === "authorized"}
                onClick={() => handleSelectFilterStatus("authorized")}
              />
              <InfoCard
                label="Bloqueados:"
                icon={<BiError />}
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
        ) : (
          !isMobile && (
            <>
              <FilterInputs handleClearFilter={handleClearFilter} />

              {isMobile && <S.Divider />}
              {isMobile && (
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
              )}
            </>
          )
        )}
      </AnimatePresence>

      {!openMenuFilter && isMobile && (
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
              <form onSubmit={handleSubmit(handleSearchById)}>
                <Controller
                  name="inputValue"
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      label="Buscar pelo ID"
                      value={field.value ?? ""}
                      searchIcon
                      onClickSearchIcon={handleSubmit(handleSearchById)}
                      onChange={(val: string) => field.onChange(val)}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </form>
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

      {transactionsValues.length === 0 ? (
        <S.NotFoundedContainer>
          <TbFaceIdError
            style={{ width: "50px", height: "50px", color: "var(--grey-2)" }}
          />
          <S.NotFoundedLabel>Nenhuma Transação encontrada!</S.NotFoundedLabel>
        </S.NotFoundedContainer>
      ) : (
        <>
          {isMobile ? (
            <>
              <CardList transactions={transactionsValues} />
            </>
          ) : (
            <CustomTable transactions={transactionsValues} />
          )}
        </>
      )}
    </S.Container>
  );
};

export default TransactionsList;
