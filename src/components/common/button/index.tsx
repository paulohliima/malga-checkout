import * as S from "./style";
import React from "react";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface IButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | "stylized";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | string;
  size?: "small" | "medium" | "large";
  iconType?: "visibility" | "edit" | "delete" | "none";
  padding?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomButton: React.FC<IButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  color = "inherit",
  size = "medium",
  iconType,
  padding = "2px 8px",
  type,
}) => {
  let icon: React.ReactNode;

  const iconStyle = {
    marginLeft: 0,
    marginRight: 0,
    padding: "2px",
    fontSize: "20px",
  };

  switch (iconType) {
    case "visibility":
      icon = <VisibilityIcon style={iconStyle} />;
      break;
    case "edit":
      icon = <EditIcon style={iconStyle} />;
      break;
    case "delete":
      icon = <DeleteIcon style={iconStyle} />;
      break;
    default:
      icon = undefined;
  }

  return (
    <>
      {variant !== "stylized" ? (
        <Button
          onClick={onClick}
          variant={variant}
          size={size}
          sx={{
            width: "max-content",
            padding,
            minWidth: "10px",
            color,
            borderColor: color,
          }}
          type={type}
        >
          {label || icon}
        </Button>
      ) : (
        <S.Container>{label}</S.Container>
      )}
    </>
  );
};

export default CustomButton;
