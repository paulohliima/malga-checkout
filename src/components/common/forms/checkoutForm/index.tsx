import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import CustomButton from "../../button";
import { checkoutSchema } from "@/schemas/checkoutSchema";

interface IDocument {
  type: "cpf" | "cnpj";
  number: string;
}

interface IAddress {
  city: string;
  street: string;
  number: string;
  country: string;
  state: string;
  neighborhood: string;
}

interface ICustomer {
  firstName: string;
  lastName: string;
  document: IDocument;
  address: IAddress;
}

const CheckoutForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const customer: ICustomer = {
      firstName: data.firstName,
      lastName: data.lastName,
      document: {
        type: data.documentType,
        number: data.documentNumber,
      },
      address: {
        city: data.city,
        street: data.street,
        number: data.number,
        country: data.country,
        state: data.state,
        neighborhood: data.neighborhood,
      },
    };

    console.log("Customer:", customer);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dados do Cliente</h2>

      <S.Label>Nome</S.Label>
      <S.Input {...register("firstName")} />
      {errors.firstName && <S.Error>{errors.firstName.message}</S.Error>}

      <S.Label>Sobrenome</S.Label>
      <S.Input {...register("lastName")} />
      {errors.lastName && <S.Error>{errors.lastName.message}</S.Error>}

      <S.Label>Tipo de Documento</S.Label>
      <S.Select {...register("documentType")}>
        <option value="">Selecione</option>
        <option value="cpf">CPF</option>
        <option value="cnpj">CNPJ</option>
      </S.Select>
      {errors.documentType && <S.Error>{errors.documentType.message}</S.Error>}

      <S.Label>Número do Documento</S.Label>
      <S.Input {...register("documentNumber")} />
      {errors.documentNumber && (
        <S.Error>{errors.documentNumber.message}</S.Error>
      )}

      <S.Label>Rua</S.Label>
      <S.Input {...register("street")} />
      {errors.street && <S.Error>{errors.street.message}</S.Error>}

      <S.Label>Número</S.Label>
      <S.Input {...register("number")} />
      {errors.number && <S.Error>{errors.number.message}</S.Error>}

      <S.Label>Bairro</S.Label>
      <S.Input {...register("neighborhood")} />
      {errors.neighborhood && <S.Error>{errors.neighborhood.message}</S.Error>}

      <S.Label>Cidade</S.Label>
      <S.Input {...register("city")} />
      {errors.city && <S.Error>{errors.city.message}</S.Error>}

      <S.Label>Estado</S.Label>
      <S.Input {...register("state")} />
      {errors.state && <S.Error>{errors.state.message}</S.Error>}

      <S.Label>País</S.Label>
      <S.Input {...register("country")} />
      {errors.country && <S.Error>{errors.country.message}</S.Error>}

      <CustomButton label="Continuar" type="submit"></CustomButton>
    </S.Form>
  );
};

export default CheckoutForm;
