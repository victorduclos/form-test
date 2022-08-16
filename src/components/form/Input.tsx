import { Field, FieldValue } from "graneet-form";
import { FormEvent, ReactNode } from "react";

interface Input<T extends Record<string, FieldValue>, K extends keyof T = keyof T> {
  name: K,
  children?: ReactNode,
}

export const Input = <
  T extends Record<string, FieldValue>,
  K extends keyof T = keyof T,
  >({ name, children }: Input<T, K>) => {
  console.log(1);

  return (
    <Field<T, K> name={name} render={({onBlur, onChange, onFocus}) => {
      const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value as T[K] | undefined;
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
