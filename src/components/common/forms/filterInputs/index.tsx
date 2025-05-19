import { useForm, Controller, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FilterFormData, filterSchema } from "@/schemas/filterSchema";
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

  const { handleSubmit, control, watch, reset } = useForm<FilterFormData>({
    resolver: yupResolver(filterSchema) as Resolver<FilterFormData>,
    defaultValues: {
      typeFilter: "id",
      inputValue: "",
      status: "",
      method: "",
    },
  });

  const typeFilter = watch("typeFilter");

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
      toast.error(e instanceof Error ? e.message : "Erro desconhecido");
    }
  };

  const onSubmit = (data: FilterFormData) => {
    const { typeFilter, inputValue, status, method } = data;
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

  const handleClearValuesFilter = () => {
    reset();
    handleClearFilter();
  };

  return (
    <S.Container>
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
          <S.RefreshLabel>Atualizar Lista</S.RefreshLabel>
        </S.RefreshContainer>
      )}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FiltersWrapper>
          <S.InputsContainer>
            <Controller
              name="typeFilter"
              control={control}
              render={({ field, fieldState }) => (
                <CustomSelect
                  label="Tipo"
                  value={field.value}
                  onChange={field.onChange}
                  options={optionsType}
                  fullWidth
                  fixedLabelAsPlaceholder
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {typeFilter === "id" && (
              <Controller
                name="inputValue"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    label="Digite o ID"
                    value={field.value ?? ""}
                    onChange={(val: string) => field.onChange(val)}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fixedLabelAsPlaceholder
                  />
                )}
              />
            )}

            {typeFilter === "status" && (
              <Controller
                name="status"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    label="Status"
                    value={field.value ?? ""}
                    onChange={(val: string) => field.onChange(val)}
                    options={optionsStatus}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                    fixedLabelAsPlaceholder
                  />
                )}
              />
            )}

            {typeFilter === "method" && (
              <Controller
                name="method"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    label="Método de Pagamento"
                    value={field.value ?? ""}
                    onChange={(val: string) => field.onChange(val)}
                    options={optionsMethod}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                    fixedLabelAsPlaceholder
                  />
                )}
              />
            )}
          </S.InputsContainer>

          <S.Row>
            <S.ButtonsContainer>
              <CustomButton
                variant="contained"
                label="Buscar"
                type="submit"
                sxStyle={{ width: "100px" }}
              />
              <CustomButton
                variant="text"
                label="Limpar Filtros"
                color="var(--color-profile-2)"
                onClick={handleClearValuesFilter}
              />
            </S.ButtonsContainer>
          </S.Row>
        </S.FiltersWrapper>
      </S.Form>
    </S.Container>
  );
};

export default FilterInputs;
