import { Field } from "graneet-form";
import { FormEvent, ReactNode } from "react";

interface Input {
  name: string,
  children?: ReactNode,
}

export const Input = ({ name, children }: Input) => {
  console.log(1);

  return (
    <Field name={name} render={({onBlur, onChange, onFocus}) => {
      const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue)
      }

      return (
        <input
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={handleOnChange}
        />
      )
    }}>
      {children}
    </Field>
  )
}
