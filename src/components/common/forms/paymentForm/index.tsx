import * as S from "./style";
import React from "react";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { TbInfoSquareRounded } from "react-icons/tb";

import CustomSelect from "../../select";
import CustomInput from "../../input";
import CustomButton from "../../button";

import useTranslate from "@/hooks/useTranslate";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentFormData, paymentSchema } from "@/schemas/paymentSchema";
import { useCart } from "@/providers/cartProvider";

interface IPaymentForm {
  handleNext: () => void;
  handleBack: () => void;
}

const PaymentInfoNote = ({ children }: { children: React.ReactNode }) => (
  <S.InfoBox>
    <TbInfoSquareRounded
      style={{ width: "80px", height: "80px", color: "var(--color-profile-3)" }}
    />
    <S.InfoText>{children}</S.InfoText>
  </S.InfoBox>
);

const PaymentForm = ({ handleNext, handleBack }: IPaymentForm) => {
  const { convertCurrency } = useTranslate();
  const { getPaymentMethodInfo } = useTranslate();

  const { payment, setPayment, totalAmount } = useCart();

  const paymentOptions = [
    { value: "card", label: "Cartão de Crédito" },
    { value: "pix", label: "Pix" },
    { value: "ticket", label: "Boleto" },
  ];

  const installmentsOptions = Array.from({ length: 6 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}x de ${convertCurrency(totalAmount / (i + 1))} Sem Juros`,
  }));

  const { handleSubmit, control, watch } = useForm<PaymentFormData>({
    resolver: yupResolver(paymentSchema),
    mode: "onBlur",
    defaultValues: {
      type: (payment && payment.type) || undefined,
      card: {
        number: (payment && payment.card?.number) || "",
        holderName: (payment && payment.card?.holderName) || "",
        cvv: (payment && payment.card?.cvv) || "",
        expirationDate: (payment && payment.card?.expirationDate) || "",
        installments: (payment && payment.card?.installments) || undefined,
      },
    },
  });

  const selectedType = watch("type");
  const watchedCard = watch("card");

  const paymentInputMasks = {
    card: {
      number: "0000 0000 0000 0000",
      expirationDate: "00/0000",
      cvv: "000",
    },
  };

  const onSubmit = (data: PaymentFormData) => {
    switch (selectedType) {
      case "card":
        setPayment({
          type: data.type,
          card: {
            number: data.card.number,
            holderName: data.card.holderName,
            cvv: data.card.cvv,
            expirationDate: data.card.expirationDate,
            installments: data.card.installments,
          },
        });
        break;
      case "pix":
        setPayment({
          type: data.type,
          pix: {
            qrCodeUrl: "https://meusite.com/pix/qrcode.png",
            expiresAt: "2025-12-31T23:59:59",
            transactionId: "a1b2c3d4e5f6",
          },
        });
        break;
      case "ticket":
        setPayment({
          type: data.type,
          ticket: {
            barcode: "03399876543210987654321098765432109876543210",
            digitableLine:
              "03399.87654 32109.876543 21098.765432 1 87654321000000",
            url: "https://meusite.com/boleto/123456789",
            dueDate: "2025-12-31",
          },
        });
        break;
    }

    handleNext();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {selectedType === "card" && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <S.ContainerCreditCard>
            <S.Row>
              <S.MethodIcon src={getPaymentMethodInfo("card").icon} />
              <S.CardTitle>Crédito</S.CardTitle>
            </S.Row>
            <S.CardNumber>
              {watchedCard.number || "2222 2222 2222 2222"}
            </S.CardNumber>
            <S.RowBottonCard>
              <S.CardName>
                {watchedCard.holderName || "Nome igual ao do cartão"}
              </S.CardName>
              <S.CardExpiration>
                {watchedCard.expirationDate || "MM/AA"}
              </S.CardExpiration>
            </S.RowBottonCard>
          </S.ContainerCreditCard>
        </motion.div>
      )}

      <S.Column>
        <S.Label>Formas de Pagamento</S.Label>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <CustomSelect
              label="Selecione o tipo"
              value={field.value ?? ""}
              onChange={(val) => field.onChange(val)}
              options={paymentOptions}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fixedLabelAsPlaceholder
            />
          )}
        />
      </S.Column>

      {selectedType === "card" && (
        <S.ContainerForm>
          <S.ContainerInputs>
            <S.Column>
              <S.Label>Número do Cartão</S.Label>
              <Controller
                name="card.number"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    label="Ex: 4111 1111 1111 1111"
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fixedLabelAsPlaceholder
                    mask={paymentInputMasks.card.number}
                  />
                )}
              />
            </S.Column>
            <S.Column>
              <S.Label>Número de Parcelas</S.Label>
              <Controller
                name="card.installments"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    label="Número de Parcelas"
                    value={field.value ?? ""}
                    onChange={(val) => field.onChange(val)}
                    options={installmentsOptions}
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fixedLabelAsPlaceholder
                  />
                )}
              />
            </S.Column>
          </S.ContainerInputs>

          <S.Column>
            <S.Label>Nome do Titular</S.Label>
            <Controller
              name="card.holderName"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  label="Ex: João Silva"
                  value={field.value ?? ""}
                  onChange={(val) => field.onChange(val)}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fixedLabelAsPlaceholder
                />
              )}
            />
          </S.Column>

          <S.ContainerInputs>
            <S.Column>
              <S.Label>CVV</S.Label>
              <Controller
                name="card.cvv"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    label="Ex: 123"
                    value={field.value ?? ""}
                    onChange={(val) => field.onChange(val)}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fixedLabelAsPlaceholder
                    mask={paymentInputMasks.card.cvv}
                  />
                )}
              />
            </S.Column>
            <S.Column>
              <S.Label>Data de Expiração</S.Label>
              <Controller
                name="card.expirationDate"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    label="Ex: 12/2025"
                    value={field.value ?? ""}
                    onChange={(val) => field.onChange(val)}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fixedLabelAsPlaceholder
                    mask={paymentInputMasks.card.expirationDate}
                  />
                )}
              />
            </S.Column>
          </S.ContainerInputs>
        </S.ContainerForm>
      )}

      {selectedType === "pix" && (
        <S.ContainerInfo>
          <PaymentInfoNote>
            O QR Code será gerado automaticamente após a finalização da compra.
          </PaymentInfoNote>
        </S.ContainerInfo>
      )}

      {selectedType === "ticket" && (
        <S.ContainerInfo>
          <PaymentInfoNote>
            O boleto com código de barras e linha digitável será disponibilizado
            após a finalização da compra.
          </PaymentInfoNote>
        </S.ContainerInfo>
      )}

      <S.FooterButtons>
        <CustomButton
          label="Voltar"
          variant="text"
          color="var(--failed-1)"
          onClick={handleBack}
          sxStyle={{
            borderColor: "var(--failed-1)",
          }}
        />

        <CustomButton
          label="Continuar"
          variant="contained"
          color="var(--color-white)"
          type="submit"
        />
      </S.FooterButtons>
    </S.Form>
  );
};

export default PaymentForm;
