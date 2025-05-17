import * as S from "./style";
import { IItem } from "@/interfaces/transactions";

interface IProductCard {
  item: IItem;
}

export const ProductCard = ({ item }: IProductCard) => {
  return (
    <S.Container>
      <S.Column>
        <S.Column>
          <S.ProductLabel>Produto: </S.ProductLabel>
          <S.ProductName>{item.name}</S.ProductName>
        </S.Column>
        <S.Column>
          <S.ProductLabel>Preço: </S.ProductLabel>
          <S.ProductPrice>R$ {item.amount}</S.ProductPrice>
        </S.Column>
      </S.Column>
      <S.Row>
        <S.ProductLabel>x</S.ProductLabel>
        <S.ProductQuantity>{item.quantity}</S.ProductQuantity>
      </S.Row>
    </S.Container>
  );
};
