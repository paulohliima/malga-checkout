import useMediaQuery from "@/hooks/useMediaQuery";
import * as S from "./style";
import CartMobile from "../cartMobile";
import CartDesktop from "../cartDesktop";

const CartList = () => {
  const isMobile = useMediaQuery(1024);

  return (
    <S.Container>{isMobile ? <CartMobile /> : <CartDesktop />}</S.Container>
  );
};

export default CartList;
