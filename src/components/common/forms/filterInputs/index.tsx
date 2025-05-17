import { useState } from "react";
import CustomSelect from "../../select";
import * as S from "./style";
import CustomButton from "../../button";
import CustomInput from "../../input";
import { useTransactions } from "@/providers/transactionsProvider";
import { useLoading } from "@/providers/loadingProvider";

interface IFilterInputs {
  handleClearFilter: () => void;
}

const FilterInputs = ({ handleClearFilter }: IFilterInputs) => {
  const { setLoading } = useLoading();
  const { allTransactions, setTransactionsValues } = useTransactions();

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

  const handleClearValuesFilter = () => {
    setTransactionsValues(allTransactions);
    setFilters({
      typeFilter: "id",
      inputValue: "",
      status: "",
      method: "",
    });
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
    handleClearFilter();
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
      </S.Row>
    </S.Container>
  );
};

export default FilterInputs;
