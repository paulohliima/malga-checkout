import { useState } from "react";
import CustomSelect from "../../select";
import * as S from "./style";
import CustomButton from "../../button";
import CustomInput from "../../input";
import { useTransactions } from "@/providers/transactionsProvider";
import { useLoading } from "@/providers/loadingProvider";

const FilterInputs = () => {
  const { setLoading } = useLoading();
  const { allTransactions, setTransactionsValues } = useTransactions();

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

  const [typeFilter, setTypeFilter] = useState<string | number>("id");
  const [inputValueId, setInputValueId] = useState<string>("");
  const [typeStatus, setTypeStatus] = useState<string | number>("aproved");
  const [typeMethod, setTypeMethod] = useState<string | number>("card");

  const handleClearValuesFilter = () => {
    setTransactionsValues(allTransactions);
    setTypeFilter("id");
    setInputValueId("");
    setTypeStatus("");
    setTypeMethod("");
  };

  const handleSearchFilter = () => {
    switch (typeFilter) {
      case "id":
        const transactionsFilteredById = allTransactions.filter(
          (tx) => tx.id === inputValueId
        );
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        setTransactionsValues(transactionsFilteredById);
        break;
      case "status":
        const transactionsFilteredByStatus = allTransactions.filter(
          (tx) => tx.status === typeStatus
        );
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        setTransactionsValues(transactionsFilteredByStatus);
        break;
      case "method":
        const transactionsFilteredByMethod = allTransactions.filter(
          (tx) => tx.paymentMethod.type === typeMethod
        );
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        setTransactionsValues(transactionsFilteredByMethod);
        break;
      default:
        break;
    }
  };

  return (
    <S.Container>
      <S.InputsContainer>
        <CustomSelect
          label="Tipo"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e)}
          options={optionsType}
        />
        {typeFilter === "id" && (
          <CustomInput
            label="Digite o Id"
            value={inputValueId}
            onChange={(e) => setInputValueId(e)}
          />
        )}
        {typeFilter === "status" && (
          <CustomSelect
            label="Status"
            value={typeStatus}
            onChange={(e) => setTypeStatus(e)}
            options={optionsStatus}
          />
        )}
        {typeFilter === "method" && (
          <CustomSelect
            label="Metódo de Pagamento"
            value={typeMethod}
            onChange={(e) => setTypeMethod(e)}
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
