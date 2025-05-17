import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  min-height: 335px;
`;

export const TitleBox = styled(Box)`
  display: flex;
  align-items: end;
  top: -10px;
  position: absolute;

  svg {
    background-color: var(--color-profile-1);
    color: white;
    border-radius: 4px;
    padding: 6px;
    font-size: 40px;
    margin-right: 12px;
  }
`;

export const IconType = styled.img<{ $size?: number }>`
  width: ${({ $size }) => $size || 16}px;
  margin-right: 6px;
`;

export const FooterTable = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  margin-top: auto;
`;
