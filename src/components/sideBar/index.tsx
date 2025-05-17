import { useEffect, useState } from "react";
import * as S from "./style";
import useMediaQuery from "@/hooks/useMediaQuery";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { MdOutlineExitToApp } from "react-icons/md";

import { useRouter } from "next/router";
import Logo from "../logo";

const SideBar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();

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
    router.push("/transactions");
  };

  const handleClient = () => {
    toggleMenu();
    router.push("/checkout");
  };

  const handleLogout = () => {
    toggleMenu();
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
            <li onClick={handleDashboard}>
              <DashboardIcon
                style={{ marginRight: 8, width: "30px", height: "30px" }}
              />{" "}
              Área de Gestão
            </li>
            <li onClick={handleClient}>
              <PersonIcon
                style={{ marginRight: 8, width: "30px", height: "30px" }}
              />
              Área de Pagamento
            </li>
          </S.Column>
          <li onClick={handleLogout} style={{ marginTop: "auto" }}>
            <MdOutlineExitToApp
              style={{ marginRight: 8, width: "30px", height: "30px" }}
            />
            Sair
          </li>
        </S.Menu>
      </S.Container>
    </>
  );
};

export default SideBar;
