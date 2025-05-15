import * as S from "./style";

interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return <S.Container>{label}</S.Container>;
};

export default Button;
