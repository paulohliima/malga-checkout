import useMediaQuery from "@/hooks/useMediaQuery";
import * as S from "./style";
import CustomButton from "../common/button";
import { useRouter } from "next/router";
import Logo from "../logo";

export const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();

  return (
    <S.Container>
      <Logo onClick={() => router.push("/")} />
      {!isMobile && (
        <S.Row>
          <CustomButton
            onClick={() => router.push("/transactions")}
            label="Área de Gestão"
            variant="text"
          />
          <CustomButton
            onClick={() => router.push("/checkout")}
            label=" Área de Pagamento"
            variant="stylized"
          />
        </S.Row>
      )}
    </S.Container>
  );
};
