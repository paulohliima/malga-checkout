import { IItem } from "@/interfaces/transactions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IProductsList {
  products: IItem[];
}

const ProductsList = ({ products }: IProductsList) => {
  return (
    <TableContainer sx={{ overflowX: "auto" }}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Quantidade</TableCell>
            <TableCell sx={{ width: "200px", whiteSpace: "nowrap" }}>
              Produto
            </TableCell>
            <TableCell sx={{ width: "220px" }}>Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: IItem, index) => (
            <TableRow key={index}>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsList;
