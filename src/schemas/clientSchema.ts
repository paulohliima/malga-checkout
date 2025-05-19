import * as yup from "yup";
import { InferType } from "yup";

export const clientSchema = yup.object().shape({
  firstName: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().required("Sobrenome é obrigatório"),
  documentType: yup
    .string()
    .oneOf(["cpf", "cnpj"], "Tipo de documento inválido")
    .required("Tipo de documento é obrigatório"),
  documentNumber: yup
    .string()
    .required("Número do documento é obrigatório")
    .test("length-check", "Documento Inválido", function (value) {
      const { documentType } = this.parent;
      const digits = value?.replace(/\D/g, "") ?? "";
      if (documentType === "cpf") return digits.length === 11;
      if (documentType === "cnpj") return digits.length === 14;
      return false;
    }),
  street: yup.string().required("Rua é obrigatória"),
  number: yup.string().required("Número é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  city: yup
    .string()
    .required("Cidade é obrigatória")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Cidade deve conter somente letras"),

  state: yup
    .string()
    .required("Estado é obrigatório")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Estado deve conter somente letras"),

  country: yup
    .string()
    .required("País é obrigatório")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "País deve conter somente letras"),
});

export type ClientFormData = InferType<typeof clientSchema>;
