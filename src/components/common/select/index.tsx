/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./style";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Option {
  label: string;
  value: string | number;
}

interface ICustomSelect {
  label: string;
  value: string | number;
  options: Option[];
  onChange: React.Dispatch<any>;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  fixedLabelAsPlaceholder?: boolean;
}

const CustomSelect = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
  error = false,
  helperText = "",
  fixedLabelAsPlaceholder = false,
}: ICustomSelect) => {
  return (
    <S.Container>
      <FormControl
        color="success"
        size="small"
        fullWidth={fullWidth}
        sx={{ position: "relative" }}
      >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={fixedLabelAsPlaceholder && label}
          error={error}
          onChange={(e) => onChange(e.target.value)}
          MenuProps={{
            disableScrollLock: true,
            disablePortal: true,
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--color-profile-2)",
              },
              "&:hover fieldset": {
                borderColor: "var(--color-profile-2)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-profile-2)",
              },
            },
            "& .MuiInputLabel-root": {
              color: "var(--grey-2)",
            },
            "& fieldset": {
              borderRadius: "4px",
              borderColor: "var(--color-profile-2)",
            },
          }}
        >
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
        <S.ErrorLabel>{error ? helperText : "\u00A0"}</S.ErrorLabel>
      </FormControl>
    </S.Container>
  );
};

export default CustomSelect;
