/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styles";
import Logo from "@/components/logo";
import Typewriter from "typewriter-effect";
import CustomButton from "@/components/common/button";
import { useRouter } from "next/router";
import { useAuthenticate } from "@/hooks/useAuthenticated";
import { useEffect } from "react";

const LandingPage: React.FC = () => {
  const router = useRouter();
  const { login, logout, isAuthenticated } = useAuthenticate();

  const authenticateAndRedirect = (route: string) => {
    login();
    router.push(route);
  };

  useEffect(() => {
    if (isAuthenticated()) {
      logout();
    }
  }, []);

  return (
    <S.Container>
      <S.Column>
        <S.ImageLanding src="/assets/images/background-landing.png" />
      </S.Column>
      <S.ColumnText>
        <Logo fontSize="large" />
        <S.ContainerText>
          <S.Text>Sua plataforma de pagamentos</S.Text>
          <S.TypeWritter>
            <Typewriter
              options={{
                strings: [
                  "Completa",
                  "Segura",
                  "Intuitiva",
                  "Rápida",
                  "Escalável",
                  "Confiável",
                  "Automática",
                  "Integrada",
                  "Flexível",
                  "Atualizada",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <S.Text>como você precisa.</S.Text>
          </S.TypeWritter>
        </S.ContainerText>
        <S.Row>
          <CustomButton
            onClick={() => authenticateAndRedirect("/checkout")}
            label="Ir para Checkout"
            variant="contained"
          />
          <CustomButton
            onClick={() => authenticateAndRedirect("/transactions")}
            label="Ir para Gestão"
            variant="stylized"
          />
        </S.Row>
      </S.ColumnText>
    </S.Container>
  );
};

export default LandingPage;
