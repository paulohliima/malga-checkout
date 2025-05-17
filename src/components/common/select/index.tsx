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
  onChange: React.Dispatch<string | number>;
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
