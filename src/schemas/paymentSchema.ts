import * as yup from "yup";
import { InferType } from "yup";

export const paymentSchema = yup.object({
  type: yup
    .string()
    .oneOf(["card", "pix", "ticket"], "Tipo de pagamento inválido")
    .required("Tipo de pagamento é obrigatório"),

  card: yup
    .object({
      number: yup
        .string()
        .transform((value) => (value ? value.replace(/\D/g, "") : value))
        .required("Número do cartão é obrigatório")
        .matches(/^\d{13,19}$/, "Número do cartão inválido"),
      holderName: yup
        .string()
        .required("Nome do titular é obrigatório")
        .min(3, "Nome muito curto"),
      cvv: yup
        .string()
        .required("CVV é obrigatório")
        .matches(/^\d{3,4}$/, "CVV inválido"),
      expirationDate: yup
        .string()
        .required("Data de expiração é obrigatória")
        .matches(
          /^(0[1-9]|1[0-2])\/\d{4}$/,
          "Data de expiração inválida (MM/YYYY)"
        ),
      installments: yup
        .number()
        .typeError("Número de parcelas é obrigatório")
        .required("Número de parcelas é obrigatório")
        .min(1, "Mínimo de 1 parcela")
        .max(12, "Máximo de 12 parcelas"),
    })
    .when("type", {
      is: "card",
      then: (schema) => schema.required("Dados do cartão são obrigatórios"),
      otherwise: (schema) => schema.strip(), // remove se não for "card"
    }),
});

export type PaymentFormData = InferType<typeof paymentSchema>;
