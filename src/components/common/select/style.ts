import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 220px;
  max-width: 345px;
  width: 100%;

  @media (min-width: 560px) {
    max-width: 250px;
  }
`;
