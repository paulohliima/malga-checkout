import { ITransactionResponse } from "@/interfaces/transactions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CustomButton from "../button";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import { useState } from "react";
import TransactionDetailModal from "@/components/modals/transactionDetail";

interface ICustomTable {
  transactions: ITransactionResponse[];
}

const CustomTable = ({ transactions }: ICustomTable) => {
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [transactionDetail, setTransactionDetail] =
    useState<ITransactionResponse>();

  const handleOpenDetailsTransaction = async (id?: string) => {
    try {
      if (id) {
        const data = await transactionsService.findOne(id);
        setTransactionDetail(data);
        setOpenModalDetails(true);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  return (
    <>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell sx={{ width: "200px", whiteSpace: "nowrap" }}>
                Método de Pagamento
              </TableCell>
              <TableCell sx={{ width: "220px" }}>Id</TableCell>
              <TableCell>Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction: ITransactionResponse) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.paymentMethod.type}</TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {transaction.id}
                </TableCell>
                <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                  <CustomButton
                    iconType="visibility"
                    onClick={() => handleOpenDetailsTransaction(transaction.id)}
                    padding="2px"
                    color="info"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {transactionDetail && (
        <TransactionDetailModal
          onClose={() => setOpenModalDetails(false)}
          open={openModalDetails}
          transaction={transactionDetail}
        />
      )}
    </>
  );
};

export default CustomTable;
