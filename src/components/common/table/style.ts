import styled from "styled-components";
import { Box } from "@mui/material";

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
