/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as S from "./style";
import { RiSearch2Line } from "react-icons/ri";
import MaskedInput from "../maskedInput";

interface ICustomInput {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  searchIcon?: boolean;
  onClickSearchIcon?: () => void;
  mask?: string;
  error?: boolean;
  fixedLabelAsPlaceholder?: boolean;
  noSpaces?: boolean;
  noNumbers?: boolean;
  noSpecialChars?: boolean;
}

const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  helperText,
  fullWidth = true,
  searchIcon,
  mask = undefined,
  error,
  fixedLabelAsPlaceholder = false,
  noSpaces = false,
  noNumbers = false,
  noSpecialChars = true,
  onClickSearchIcon,
}: ICustomInput) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container $active={isFocused} $searchIcon={searchIcon}>
      <S.Row>
        {searchIcon && (
          <S.SearchIconBox $active={isFocused} $error={error}>
            <RiSearch2Line
              onClick={onClickSearchIcon}
              color="var(--color-profile-2)"
              style={{ height: "20px", width: "20px" }}
            />
          </S.SearchIconBox>
        )}
        <TextField
          label={fixedLabelAsPlaceholder ? undefined : label}
          placeholder={fixedLabelAsPlaceholder ? label : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!mask) {
              let newValue = e.target.value;

              if (noSpaces) {
                newValue = newValue.replace(/\s/g, "");
              }

              if (noNumbers) {
                newValue = newValue.replace(/[0-9]/g, "");
              }
              if (noSpecialChars) {
                newValue = newValue.replace(/[^a-zA-Z0-9\s]/g, "");
              }

              onChange(newValue);
            }
          }}
          onKeyDown={(e) => {
            if (noSpaces && e.key === " ") {
              e.preventDefault();
            }

            if (noNumbers && /^[0-9]$/.test(e.key)) {
              e.preventDefault();
            }
          }}
          disabled={disabled}
          fullWidth={fullWidth}
          variant="outlined"
          size="small"
          color="success"
          error={error && !isFocused}
          inputProps={{ maxLength: 22 }}
          //@ts-ignore
          InputProps={
            mask
              ? {
                  inputComponent: MaskedInput as any,
                  inputProps: {
                    mask,
                    name: label,
                    value,
                    onChange: (event: {
                      target: { name: string; value: string };
                    }) => onChange(event.target.value),
                  },
                }
              : undefined
          }
          sx={{
            ...(searchIcon
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
                    borderRadius: "0 4px 4px 0",
                    borderColor: "var(--color-profile-2)",
                  },
                }
              : {
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: disabled ? "none" : "var(--color-profile-2)",
                    },
                    "& input": {
                      color: "var(--grey-2)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "var(--grey-2)",
                  },
                  "& fieldset": {
                    borderRadius: "4px",
                    borderColor: "var(--color-profile-2)",
                  },
                }),
          }}
        />
      </S.Row>
      <S.ErrorLabel>{error ? helperText : "\u00A0"}</S.ErrorLabel>
    </S.Container>
  );
};

export default CustomInput;
