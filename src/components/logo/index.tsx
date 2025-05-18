import * as S from "./style";

interface ILogo {
  fontSize?: "small" | "medium" | "large";
  onClick?: () => void;
  marginBotton?: string;
}

const Logo = ({ fontSize = "medium", onClick, marginBotton }: ILogo) => {
  return (
    <>
      <S.ContainerLogo onClick={onClick} $marginBotton={marginBotton}>
        <S.Logo fontSize={fontSize}>E-</S.Logo>
        <S.LogoDecoration fontSize={fontSize}>Pay</S.LogoDecoration>
      </S.ContainerLogo>
    </>
  );
};

export default Logo;
