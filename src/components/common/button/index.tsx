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
  sxStyle?: object;
}

const CustomButton: React.FC<IButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  color,
  size = "medium",
  iconType,
  padding = "4px 12px",
  type,
  sxStyle = {},
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
      {variant !== "stylized" && variant !== "text" ? (
        <Button
          onClick={onClick}
          variant={variant}
          size={size}
          sx={{
            width: "max-content",
            padding,
            textTransform: "capitalize",
            minWidth: "10px",
            color: color ? color : "var(--color-white)",
            backgroundColor:
              variant === "outlined" ? "none" : "var(--color-profile-1)",
            borderColor: color,
            border:
              variant === "outlined"
                ? "1px solid var(--color-profile-2)"
                : "none",
            transition: "0.2s ease-in",
            borderRadius: "7px",
            "&:hover":
              variant === "outlined"
                ? {
                    color: "var(--color-profile-1)",
                    borderColor: "var(--color-profile-1)",
                  }
                : {},
            ...sxStyle,
          }}
          type={type}
        >
          {label || icon}
        </Button>
      ) : variant === "stylized" ? (
        <S.Container onClick={onClick}>{label}</S.Container>
      ) : (
        <S.ContainerText onClick={onClick}>{label}</S.ContainerText>
      )}
    </>
  );
};

export default CustomButton;
