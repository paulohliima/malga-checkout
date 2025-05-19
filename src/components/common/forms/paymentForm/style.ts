import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 700px;
  min-height: 665px;
  margin: auto;
  font-family: var(--inter);
  align-items: center;
`;

export const Label = styled.label`
  font-weight: 500;
  color: var(--color-profile-2);
  padding-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-profile-2);
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-profile-2);
`;

export const Button = styled.button`
  padding: 12px;
  background-color: var(--color-profile-1);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: var(--color-profile-2);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 20px;
  width: 400px;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const InfoIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

export const InfoText = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

export const ContainerCreditCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  box-shadow: var(--box-shadow-1);
  border-radius: 12px;
  width: 330px;
  margin-bottom: 30px;
  padding: 20px;
  justify-content: space-between;
`;

export const MethodIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RowBottonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  display: flex;
  font-size: var(--font-size-14);
`;
export const CardNumber = styled.h3`
  display: flex;
  font-size: var(--font-size-24);
`;
export const CardName = styled.h3`
  display: flex;
  margin-right: 20px;
  font-size: var(--font-size-14);
`;
export const CardExpiration = styled.h3`
  display: flex;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    min-height: 262px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
  justify-content: end;
  margin-top: auto;
  gap: 20px;
  padding-top: 10px;

  @media (min-width: 560px) {
    justify-content: space-between;
    flex-direction: row;
  }

  button {
    width: 345px;

    @media (min-width: 560px) {
      width: 200px;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    min-height: 492px;
  }
`;
