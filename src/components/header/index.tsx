import * as S from "./style";

import { useRouter } from "next/router";

import Logo from "../logo";
import CustomButton from "../common/button";

import useMediaQuery from "@/hooks/useMediaQuery";
import { useAuthenticate } from "@/hooks/useAuthenticated";

export const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();
  const { isAuthenticated } = useAuthenticate();

  return (
    <S.Container $isLogged={isAuthenticated()} $isMobile={isMobile}>
      <Logo onClick={() => router.push("/")} />
      {!isMobile && (
        <S.Row>
          <CustomButton
            onClick={() => router.push("/transactions")}
            label="Painel de Gestão"
            variant="text"
            color="var(--color-profile-2)"
          />
          <CustomButton
            onClick={() => router.push("/checkout")}
            label="Ir para Checkout"
            variant="stylized"
          />
        </S.Row>
      )}
    </S.Container>
  );
};
