import useTranslate from "@/hooks/useTranslate";
import * as S from "./style";
import { IItem } from "@/interfaces/transactions";
import { useCart } from "@/providers/cartProvider";

interface ICartDesktop {
  products?: IItem[];
}

const CartDesktop = ({ products }: ICartDesktop) => {
  const { mockupProducts, totalAmount } = useCart();
  const { convertCurrency } = useTranslate();

  const productsList = products || mockupProducts;

  return (
    <S.Container>
      <S.Section>
        <S.Title>Lista de Produtos:</S.Title>
        <S.ItemList>
          {productsList.map((item: IItem, index) => (
            <S.Item key={index}>
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>{convertCurrency(item.amount)}</span>
            </S.Item>
          ))}
        </S.ItemList>
      </S.Section>
      <S.Section>
        <S.InfoRow>
          <S.SubTitle>Total:</S.SubTitle>
          <S.InfoValue>{convertCurrency(totalAmount)}</S.InfoValue>
        </S.InfoRow>
      </S.Section>
    </S.Container>
  );
};

export default CartDesktop;
