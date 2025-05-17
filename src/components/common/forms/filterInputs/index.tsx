import { useState } from "react";
import CustomSelect from "../../select";
import * as S from "./style";
import CustomButton from "../../button";
import CustomInput from "../../input";
import { useTransactions } from "@/providers/transactionsProvider";
import { useLoading } from "@/providers/loadingProvider";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import useMediaQuery from "@/hooks/useMediaQuery";

interface IFilterInputs {
  handleClearFilter: () => void;
}

const FilterInputs = ({ handleClearFilter }: IFilterInputs) => {
  const isMobile = useMediaQuery();
  const { loading, setLoading } = useLoading();
  const { allTransactions, setTransactionsValues, setPageValues } =
    useTransactions();

  const [filters, setFilters] = useState({
    typeFilter: "id",
    inputValue: "",
    status: "",
    method: "",
  });

  const optionsType = [
    { value: "id", label: "ID" },
    { value: "status", label: "Status" },
    { value: "method", label: "Método de Pagamento" },
  ];

  const optionsStatus = [
    { value: "authorized", label: "Autorizado" },
    { value: "failed", label: "Bloqueado" },
  ];

  const optionsMethod = [
    { value: "card", label: "Cartão de Crédito" },
    { value: "pix", label: "Pix" },
    { value: "ticket", label: "Boleto" },
  ];

  const handleRefreshList = async () => {
    try {
      const data = await transactionsService.getAll({ page: 1 });
      setLoading(true);
      setTimeout(() => {
        setTransactionsValues(data);
        setPageValues((prev) => ({
          ...prev,
          currentPage: 1,
        }));
        setLoading(false);
      }, 400);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const handleClearValuesFilter = () => {
    handleClearFilter();
  };

  const handleSearchFilter = () => {
    const { typeFilter, inputValue, status, method } = filters;
    let filtered = [];

    switch (typeFilter) {
      case "id":
        filtered = allTransactions.filter((tx) => tx.id === inputValue);
        break;
      case "status":
        filtered = allTransactions.filter((tx) => tx.status === status);
        break;
      case "method":
        filtered = allTransactions.filter(
          (tx) => tx.paymentMethod.type === method
        );
        break;
      default:
        filtered = allTransactions;
    }

    setLoading(true);
    setTimeout(() => {
      setTransactionsValues(filtered);
      setLoading(false);
    }, 300);
  };

  return (
    <S.Container>
      <S.InputsContainer>
        <CustomSelect
          label="Tipo"
          value={filters.typeFilter}
          onChange={(e) => setFilters((prev) => ({ ...prev, typeFilter: e }))}
          options={optionsType}
        />

        {filters.typeFilter === "id" && (
          <CustomInput
            label="Digite o Id"
            value={filters.inputValue}
            onChange={(e) => setFilters((prev) => ({ ...prev, inputValue: e }))}
          />
        )}

        {filters.typeFilter === "status" && (
          <CustomSelect
            label="Status"
            value={filters.status}
            onChange={(e) => setFilters((prev) => ({ ...prev, status: e }))}
            options={optionsStatus}
          />
        )}

        {filters.typeFilter === "method" && (
          <CustomSelect
            label="Método de Pagamento"
            value={filters.method}
            onChange={(e) => setFilters((prev) => ({ ...prev, method: e }))}
            options={optionsMethod}
          />
        )}
      </S.InputsContainer>

      <S.Row>
        <S.ButtonsContainer>
          <CustomButton
            variant="outlined"
            label="Buscar"
            color="#006f7d"
            onClick={handleSearchFilter}
          />
          <CustomButton
            variant="text"
            label="Limpar Filtros"
            color="#006f7d"
            onClick={handleClearValuesFilter}
          />
        </S.ButtonsContainer>
        {!isMobile && (
          <S.RefreshContainer onClick={handleRefreshList}>
            <S.RefreshIcon
              $loading={loading}
              style={{
                width: "30px",
                height: "30px",
                color: "var(--color-profile-2)",
                alignSelf: "end",
              }}
            />
            <S.RefreshLabel>Atualizar</S.RefreshLabel>
          </S.RefreshContainer>
        )}
      </S.Row>
    </S.Container>
  );
};

export default FilterInputs;
