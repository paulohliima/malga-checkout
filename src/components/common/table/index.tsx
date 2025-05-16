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

interface ICustomTable {
  transactions: ITransactionResponse[];
}

const CustomTable = ({ transactions }: ICustomTable) => {
  return (
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
          {transactions.map(
            (transaction: ITransactionResponse, index: number) => (
              <TableRow key={index}>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.paymentMethod.type}</TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {transaction.id}
                </TableCell>
                <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                  <CustomButton
                    iconType="visibility"
                    onClick={() => console.log(transaction)}
                    padding="2px"
                    color="info"
                  />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
