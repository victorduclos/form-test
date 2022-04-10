import { Input } from '../components/form/Input';
import { Form, useForm, FieldValues } from 'graneet-form';
import { MouseEventHandler } from "react";

export const SimpleForm = () => {
  const form = useForm()

  const handleGetValues: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(form.getFormValues());
  }

  const handleSubmit: (formValues: FieldValues) => void = (formValues: FieldValues) => {
    console.log(formValues);
  }

  return (
    <Form form={form} onSubmit={handleSubmit}>
      SimpleForm
      <Input name="firstName">
      </Input>
      <button type="submit" onClick={handleGetValues}>
        Get Values
      </button>
    </Form>
  )
}
