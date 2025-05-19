import * as yup from "yup";
import { InferType } from "yup";

const validateLuhn = (cardNumber: string) => {
  let sum = 0;
  let shouldDouble = false;

  // Itera de trás pra frente
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

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
        .matches(/^\d{13,19}$/, "Número do cartão inválido")
        .test("luhn-check", "Número do cartão inválido", (value) => {
          if (!value) return false;
          return validateLuhn(value);
        }),
      holderName: yup
        .string()
        .required("Nome do titular é obrigatório")
        .min(3, "Nome muito curto")
        .matches(/^[A-Za-zÀ-ú\s]+$/, "Nome inválido"),
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
        )
        .test("valid-expiration", "Cartão expirado", (value) => {
          if (!value) return false;
          const [month, year] = value.split("/").map(Number);
          if (!month || !year) return false;

          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();

          return (
            year > currentYear ||
            (year === currentYear && month >= currentMonth)
          );
        }),
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
