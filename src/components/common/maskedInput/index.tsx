/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IMaskInput } from "react-imask";

export interface MaskedInputProps {
  mask: string;
  name: string;
  value?: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  definitions?: Record<string, RegExp>;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  function MaskedInputComponent(props, ref) {
    const { mask, onChange, name, definitions, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask={mask}
        inputRef={ref}
        definitions={definitions}
        onAccept={(value: any) => {
          onChange({ target: { name, value } });
        }}
        overwrite
      />
    );
  }
);

export default MaskedInput;
