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
}

const CustomSelect = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
}: ICustomSelect) => {
  return (
    <S.Container>
      <FormControl color="success" size="small" fullWidth={fullWidth}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={(e) => onChange(e.target.value)}
          MenuProps={{
            disableScrollLock: true,
            style: { width: "100%" },
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
              borderRadius: "16px",
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
      </FormControl>
    </S.Container>
  );
};

export default CustomSelect;
