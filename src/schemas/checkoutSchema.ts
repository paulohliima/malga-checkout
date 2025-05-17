import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().required("Sobrenome é obrigatório"),
  documentType: yup
    .mixed()
    .oneOf(["cpf", "cnpj"])
    .required("Tipo de documento é obrigatório"),
  documentNumber: yup.string().required("Número do documento é obrigatório"),
  street: yup.string().required("Rua é obrigatória"),
  number: yup.string().required("Número é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  state: yup.string().required("Estado é obrigatório"),
  country: yup.string().required("País é obrigatório"),
});
