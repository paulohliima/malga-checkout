/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styles";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import useMediaQuery from "@/hooks/useMediaQuery";
import CustomButton from "@/components/common/button";
import { useAuthenticate } from "@/hooks/useAuthenticated";

import { FaRegCheckCircle } from "react-icons/fa";

const CompletedPage: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();
  const { login } = useAuthenticate();

  const authenticateAndRedirect = (route: string) => {
    login();
    router.push(route);
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <S.Column>
          <FaRegCheckCircle
            style={{
              width: isMobile ? "200px" : "370px",
              height: isMobile ? "200px" : "370px",
              color: "var(--color-profile-2)",
            }}
          />
          <S.Text>Compra realizada com sucesso!</S.Text>
          <S.Row>
            <CustomButton
              onClick={() => authenticateAndRedirect("/checkout")}
              label="Ir para Checkout"
              variant="contained"
              sxStyle={{
                width: isMobile ? "200px" : "250px",
              }}
            />
            <CustomButton
              onClick={() => authenticateAndRedirect("/transactions")}
              label="Ir para Gestão"
              variant="stylized"
            />
          </S.Row>
        </S.Column>
      </motion.div>
    </S.Container>
  );
};

export default CompletedPage;
