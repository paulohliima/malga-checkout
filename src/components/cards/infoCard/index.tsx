/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./style";

interface IInfoCard {
  label: string;
  value: number;
  icon: any;
  type: "success" | "failed";
  onClick?: () => void;
  selected: boolean;
}

const InfoCard = ({
  label,
  value,
  icon,
  type,
  onClick,
  selected,
}: IInfoCard) => {
  return (
    <S.Container onClick={onClick} $type={type} $selected={selected}>
      <S.Column>
        <S.Title>{label}</S.Title>
        <S.Value>{value}</S.Value>
      </S.Column>
      {icon}
    </S.Container>
  );
};

export default InfoCard;
