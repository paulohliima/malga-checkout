import * as yup from "yup";
import { InferType } from "yup";

export const filterSchema = yup.object({
  typeFilter: yup
    .string()
    .oneOf(["id", "status", "method"])
    .required("Tipo é obrigatório"),

  inputValue: yup.string().when("typeFilter", {
    is: "id",
    then: (schema) => schema.required("ID obrigatório"),
    otherwise: (schema) => schema.optional(),
  }),

  status: yup.string().when("typeFilter", {
    is: "status",
    then: (schema) => schema.required("Status é obrigatório"),
    otherwise: (schema) => schema.optional(),
  }),

  method: yup.string().when("typeFilter", {
    is: "method",
    then: (schema) => schema.required("Método é obrigatório"),
    otherwise: (schema) => schema.optional(),
  }),
});

export const searchSchema = yup.object({
  inputValue: yup.string().required("ID obrigatório"),
});

export type FilterFormData = InferType<typeof filterSchema>;

export type FilterSearchData = InferType<typeof searchSchema>;
