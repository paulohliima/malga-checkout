import * as S from "./style";
import useTranslate from "@/hooks/useTranslate";
import { IItem } from "@/interfaces/transactions";

interface IProductsList {
  products: IItem[];
}

const ProductsList = ({ products }: IProductsList) => {
  const { convertCurrency } = useTranslate();

  return (
    <S.Container>
      <S.Title>Resumo da Compra</S.Title>
      <S.ItemList>
        {products.map((item, index) => (
          <S.Item key={index}>
            <div>
              <S.ProductName>{item.name}</S.ProductName>
              <S.Quantity>Quantidade: {item.quantity}</S.Quantity>
            </div>
            <S.Price>{convertCurrency(item.amount)}</S.Price>
          </S.Item>
        ))}
      </S.ItemList>
    </S.Container>
  );
};

export default ProductsList;
