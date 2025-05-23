import styled, { css } from "styled-components";

interface SearchIconBoxProps {
  $active?: boolean;
  $searchIcon?: boolean;
  $error?: boolean;
}

export const Container = styled.div<SearchIconBoxProps>`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  align-items: center;
  background-color: var(--color-brand-5);
  border-radius: 4px;
  height: ${(props) => (props.$searchIcon ? "40px" : "55px")};
  cursor: pointer;
  width: 100%;
  max-width: 345px;

  @media (min-width: 560px) {
    max-width: 100%;
  }
`;

export const SearchIconBox = styled.div<SearchIconBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  height: 100%;
  border: ${(props) =>
    props.$error
      ? "1px solid var(--failed-1)"
      : "1px solid var(--color-profile-2)"};
  border-right: none;
  border-radius: 4px 0 0 4px;
  background-color: var(--color-brand-5);

  ${({ $active }) =>
    $active &&
    css`
      border: 2px solid var(--color-profile-2);
      border-right: none;
    `}
`;

export const ErrorLabel = styled.span`
  color: red;
  font-size: 0.75rem;
  display: block;
  align-self: flex-end;
  padding-left: 8px;
  padding-top: 2px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
