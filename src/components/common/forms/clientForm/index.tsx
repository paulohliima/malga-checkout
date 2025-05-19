import * as S from "./style";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { ClientFormData, clientSchema } from "@/schemas/clientSchema";
import CustomSelect from "../../select";
import CustomInput from "../../input";
import CustomButton from "../../button";
import { useCart } from "@/providers/cartProvider";

interface ICheckoutForm {
  handleNext: () => void;
}

const ClientForm = ({ handleNext }: ICheckoutForm) => {
  const { customer, setCustomer } = useCart();

  const optionsType = [
    { value: "cpf", label: "CPF" },
    { value: "cnpj", label: "CNPJ" },
  ];

  const { handleSubmit, control, watch } = useForm<ClientFormData>({
    resolver: yupResolver(clientSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: (customer && customer.firstName) || "",
      lastName: (customer && customer.lastName) || "",
      documentType: (customer && customer.document.type) || undefined,
      documentNumber: (customer && customer.document.number) || "",
      country: (customer && customer.address.country) || "",
      state: (customer && customer.address.state) || "",
      city: (customer && customer.address.city) || "",
      neighborhood: (customer && customer.address.neighborhood) || "",
      street: (customer && customer.address.street) || "",
      number: (customer && customer.address.number) || "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (data: any) => {
    setCustomer({
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
    });

    handleNext();
  };

  const documentType = watch("documentType");

  const mask = documentType === "cpf" ? "000.000.000-00" : "00.000.000/0000-00";

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
      <S.ContainerInputs>
        <S.Column>
          <S.Label>Nome</S.Label>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Primeiro Nome"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
                noNumbers
                noSpaces
              />
            )}
          />
        </S.Column>
        <S.Column>
          <S.Label>Sobrenome</S.Label>
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Último Nome"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
                noNumbers
                noSpaces
              />
            )}
          />
        </S.Column>
      </S.ContainerInputs>

      <S.ContainerInputs>
        <S.Column>
          <S.Label>Tipo de Documento</S.Label>
          <Controller
            name="documentType"
            control={control}
            render={({ field, fieldState }) => (
              <CustomSelect
                label="CPF/CNPJ"
                value={(field.value as string | number) ?? ""}
                onChange={(val: string) => field.onChange(val)}
                options={optionsType}
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
              />
            )}
          />
        </S.Column>

        <S.Column>
          <S.Label>Nº do Documento</S.Label>
          <Controller
            name="documentNumber"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Ex: 123.456.789-12"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                mask={mask}
                fixedLabelAsPlaceholder
                disabled={documentType === undefined}
              />
            )}
          />
        </S.Column>
      </S.ContainerInputs>

      <S.ContainerInputs>
        <S.Column>
          <S.Label>País</S.Label>
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Ex: Brasil"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
                noNumbers
              />
            )}
          />
        </S.Column>
        <S.Column>
          <S.Label>Estado</S.Label>
          <Controller
            name="state"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Ex: Pará"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
                noNumbers
              />
            )}
          />
        </S.Column>
      </S.ContainerInputs>

      <S.ContainerInputs>
        <S.Column>
          <S.Label>Cidade</S.Label>
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Ex: Belém"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
                noNumbers
              />
            )}
          />
        </S.Column>
        <S.Column>
          <S.Label>Bairro</S.Label>
          <Controller
            name="neighborhood"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                label="Ex: Bairro X"
                value={field.value}
                onChange={(val: string) => field.onChange(val)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fixedLabelAsPlaceholder
              />
            )}
          />
        </S.Column>
      </S.ContainerInputs>

      <S.Column>
        <S.Label>Rua</S.Label>
        <Controller
          name="street"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Ex: Rua 1"
              value={field.value}
              onChange={(val: string) => field.onChange(val)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fixedLabelAsPlaceholder
            />
          )}
        />
      </S.Column>
      <S.Column>
        <S.Label>Número</S.Label>
        <Controller
          name="number"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Ex: 123"
              value={field.value}
              onChange={(val: string) => field.onChange(val)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fixedLabelAsPlaceholder
              mask={"000000000"}
            />
          )}
        />
      </S.Column>
      <S.FooterButtons>
        <CustomButton
          label={"Continuar"}
          variant="contained"
          color="var(--color-white)"
          type="submit"
        />
      </S.FooterButtons>
    </S.Form>
  );
};

export default ClientForm;
