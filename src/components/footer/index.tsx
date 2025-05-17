import Logo from "../logo";
import * as S from "./style";

export const Footer = () => {
  return (
    <S.Container>
      <S.Text>© 2025</S.Text>
      <Logo fontSize="small" />
      <S.Text>Por Paulo Lima | Todos Direitos Reservados</S.Text>
    </S.Container>
  );
};
