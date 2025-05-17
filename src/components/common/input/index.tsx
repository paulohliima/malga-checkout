import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as S from "./style";
import { RiSearch2Line } from "react-icons/ri";

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
  searchIcon?: boolean;
  onClickSearchIcon?: () => void;
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
  searchIcon = false,
  onClickSearchIcon,
}: ICustomInput) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container $active={isFocused}>
      {searchIcon && (
        <S.SearchIconBox $active={isFocused}>
          <RiSearch2Line
            onClick={onClickSearchIcon}
            color="var(--color-profile-2)"
            style={{ height: "20px", width: "20px" }}
          />
        </S.SearchIconBox>
      )}
      <TextField
        label={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
        sx={
          searchIcon
            ? {
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "var(--color-profile-2)",
                  },
                  "& input": {
                    color: "var(--grey-2)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "var(--grey-2)",
                },
                "& fieldset": {
                  borderLeft: "none",
                  borderRadius: "0 16px 16px 0",
                  borderColor: "var(--color-profile-2)",
                },
              }
            : {
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "var(--color-profile-2)",
                  },
                  "& input": {
                    color: "var(--grey-2)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "var(--grey-2)",
                },
                "& fieldset": {
                  borderRadius: "16px", // ⬅️ borda completa
                  borderColor: "var(--color-profile-2)",
                },
              }
        }
      />
    </S.Container>
  );
};

export default CustomInput;
