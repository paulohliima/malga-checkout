import styled, { css } from "styled-components";

interface SearchIconBoxProps {
  $active?: boolean;
}

export const Container = styled.div<SearchIconBoxProps>`
  display: flex;
  min-width: 220px;
  align-items: center;
  background-color: var(--color-brand-5);
  border-radius: 14px;
  height: 40px;
  cursor: pointer;
  width: 100%;
  max-width: 345px;

  @media (min-width: 560px) {
    max-width: 250px;
  }
`;

export const SearchIconBox = styled.div<SearchIconBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  height: 100%;
  border: 1px solid var(--color-profile-2);
  border-right: none;
  border-radius: 14px 0 0 14px;
  background-color: var(--color-brand-5);

  ${({ $active }) =>
    $active &&
    css`
      border: 2px solid var(--color-profile-2);
      border-right: none;
    `}
`;
