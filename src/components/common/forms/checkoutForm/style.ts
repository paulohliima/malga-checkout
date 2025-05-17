import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  max-width: 600px;
  margin: auto;
  font-family: var(--inter);
`;

export const Label = styled.label`
  font-weight: 600;
  color: var(--color-profile-2);
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

export const Error = styled.span`
  color: red;
  font-size: var(--font-size-12);
`;
