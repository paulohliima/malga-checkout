import axios from "axios";
import {
  ITransactionRequest,
  ITransactionResponse,
} from "@/interfaces/transactions";

const API_URL = "/api/transactions";

interface IGetAll {
  page?: number;
}

export const transactionsService = {
  getAll: async ({ page }: IGetAll = {}): Promise<ITransactionResponse[]> => {
    const response = await axios.get<ITransactionResponse[]>(API_URL, {
      params: page ? { page } : {},
    });
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
