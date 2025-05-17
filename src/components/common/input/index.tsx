import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import * as S from "./style";

interface ICustomInput {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  helperText,
  fullWidth = true,
}: ICustomInput) => {
  return (
    <S.Container>
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={helperText}
        fullWidth={fullWidth}
        variant="outlined"
        size="small"
        color="success"
      />
    </S.Container>
  );
};

export default CustomInput;
