import { useEffect, useState } from "react";
import * as S from "./style";
import useMediaQuery from "@/hooks/useMediaQuery";

import { MdDashboard } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiHome9Fill } from "react-icons/ri";

import { useRouter } from "next/router";
import Logo from "../logo";
import { useAuthenticate } from "@/hooks/useAuthenticated";

const SideBar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();
  const { logout, login } = useAuthenticate();

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleDashboard = () => {
    toggleMenu();
    login();
    router.push("/transactions");
  };

  const handleClient = () => {
    toggleMenu();
    login();
    router.push("/checkout");
  };

  const handleLogout = () => {
    toggleMenu();
    logout();
    router.push("/");
  };

  return (
    <>
      {isMobile && (
        <S.MobileHeader>
          <S.MenuButton onClick={toggleMenu} $isOpen={isOpen}>
            <span />
            <span />
            <span />
          </S.MenuButton>
        </S.MobileHeader>
      )}

      <S.Overlay $isOpen={isOpen} onClick={toggleMenu} />
      <S.Container $isOpen={isOpen}>
        <S.Menu>
          <Logo marginBotton="80px" />
          <S.Column>
            <li onClick={handleLogout}>
              <RiHome9Fill
                style={{
                  marginRight: 8,
                  width: "30px",
                  height: "30px",
                  color: "var(--color-white)",
                }}
              />{" "}
              Início
            </li>
            <li onClick={handleDashboard}>
              <MdDashboard
                style={{
                  marginRight: 8,
                  width: "30px",
                  height: "30px",
                  color: "var(--color-white)",
                }}
              />{" "}
              Painel de Gestão
            </li>
            <li onClick={handleClient}>
              <MdOutlineAttachMoney
                style={{
                  marginRight: 8,
                  width: "30px",
                  height: "30px",
                  color: "var(--color-white)",
                }}
              />
              Checkout
            </li>
          </S.Column>
        </S.Menu>
      </S.Container>
    </>
  );
};

export default SideBar;
