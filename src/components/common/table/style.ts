import styled from "styled-components";
import { Paper, Box } from "@mui/material";

export const Container = styled(Paper)`
  padding: 60px 12px 20px 12px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 768px;
`;

export const TitleBox = styled(Box)`
  display: flex;
  align-items: end;
  top: -10px;
  position: absolute;

  svg {
    background-color: #e91e63;
    color: white;
    border-radius: 4px;
    padding: 6px;
    font-size: 40px;
    margin-right: 12px;
  }
`;
