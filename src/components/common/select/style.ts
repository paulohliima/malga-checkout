import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 220px;
  max-width: 345px;
  width: 100%;
  height: 55px;

  @media (min-width: 560px) {
    max-width: 250px;
  }
`;

export const ErrorLabel = styled.span`
  color: red;
  font-size: 0.75rem;
  display: block;
  align-self: flex-start;
  padding-top: 2px;
  padding-left: 8px;
`;
