import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  padding: 60px 0;
  border-radius: 12px;
  position: relative;
  max-width: 768px;
  background-color: transparent;
  box-shadow: none;
  color: var(--grey-1);

  @media (min-width: 768px) {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const TitleBox = styled(Box)`
  display: flex;
  top: -10px;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  padding-right: 10px;

  div {
    svg {
      background-color: var(--color-profile-1);
      color: white;
      border-radius: 4px;
      padding: 6px;
      font-size: 40px;
      margin-right: 12px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: var(--font-weight-500);
  font-size: var(--font-size-28);
  color: var(--color-profile-2);
  margin: auto 0;

  @media (min-width: 768px) {
    padding-top: 20px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-4);
  border-radius: 1px;
`;
