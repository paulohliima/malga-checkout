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
  number?: string; // só na criação
  holderName: string;
  cvv?: string; // só na criação
  expirationDate: string;
  installments: number;
  firstDigits?: string; // na resposta
  lastDigits?: string; // na resposta
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
