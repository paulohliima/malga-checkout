import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    box-shadow: var(--box-shadow-1);
    border-radius: 4px 0 0 4px;
  }

  @media (min-width: 1200px) {
    width: 750px;
  }
`;
