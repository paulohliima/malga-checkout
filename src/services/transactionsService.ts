import axios from "axios";
import {
  ITransactionRequest,
  ITransactionResponse,
} from "@/interfaces/transactions";

const API_URL = "/api/transactions";

export const transactionsService = {
  getAll: async (): Promise<ITransactionResponse[]> => {
    const response = await axios.get<ITransactionResponse[]>(API_URL);
    return response.data;
  },

  findOne: async (id: string): Promise<ITransactionResponse> => {
    const response = await axios.get<ITransactionResponse>(`${API_URL}/${id}`);
    return response.data;
  },

  create: async (data: ITransactionRequest): Promise<ITransactionResponse> => {
    const response = await axios.post<ITransactionResponse>(API_URL, data);
    return response.data;
  },
};
