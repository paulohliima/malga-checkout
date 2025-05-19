export interface IDocument {
  type: "cpf" | "cnpj";
  number: string;
}

export interface IAddress {
  city: string;
  street: string;
  number: string;
  country: string;
  state: string;
  neighborhood: string;
}

export interface ICustomer {
  firstName: string;
  lastName: string;
  document: IDocument;
  address: IAddress;
}

export interface IItem {
  name: string;
  quantity: number;
  amount: number;
}

export interface IPaymentCard {
  number?: string;
  holderName: string;
  cvv?: string;
  expirationDate: string;
  installments: number;
  firstDigits?: string;
  lastDigits?: string;
}

export interface ITicketPayment {
  barcode: string;
  digitableLine: string;
  url: string;
  dueDate: string;
}

export interface IPixPayment {
  qrCodeUrl: string;
  expiresAt: string;
  transactionId?: string;
}

export interface IPaymentMethod {
  type: "card" | "pix" | "ticket";
  card?: IPaymentCard;
  pix?: IPixPayment;
  ticket?: ITicketPayment;
}

export interface ITransactionRequest {
  id?: string;
  amount: number;
  customer: ICustomer;
  items: IItem[];
  paymentMethod: IPaymentMethod;
}

export interface ITransactionResponse {
  id?: string;
  status: "authorized" | "failed";
  amount: number;
  customer: ICustomer;
  items: IItem[];
  paymentMethod: IPaymentMethod;
}

export enum TransactionStatus {
  AUTHORIZED = "authorized",
  FAILED = "failed",
}
