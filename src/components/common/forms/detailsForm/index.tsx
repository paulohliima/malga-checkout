import CustomButton from "../../button";
import * as S from "./style";

interface IDetailsForm {
  handleNext: () => void;
  handleBack: () => void;
}

const DetailsForm = ({ handleNext, handleBack }: IDetailsForm) => {
  return (
    <S.Container>
      <S.FooterButtons>
        <CustomButton
          label="Voltar"
          variant="text"
          color="var(--failed-1)"
          onClick={handleBack}
          sxStyle={{
            width: "345px",
            marginTop: "40px",
            borderColor: "var(--failed-1)",
          }}
        />

        <CustomButton
          label="Finalizar Compra"
          variant="contained"
          color="var(--color-white)"
          onClick={handleNext}
          sxStyle={{ width: "345px", marginTop: "40px" }}
        />
      </S.FooterButtons>
    </S.Container>
  );
};

export default DetailsForm;
