import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

import * as S from "./style";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <S.Button
      onClick={scrollToTop}
      className={visible ? "show" : ""}
      aria-label="Voltar ao topo"
    >
      <FaAngleUp />
    </S.Button>
  );
};

export default ScrollToTopButton;
