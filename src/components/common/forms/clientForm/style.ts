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
  align-self: self-start;
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FooterButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: auto;
  padding-top: 10px;

  button {
    width: 345px;
    @media (min-width: 1024px) {
      width: 200px;
    }
  }
  @media (min-width: 1024px) {
    justify-content: end;
  }
`;
