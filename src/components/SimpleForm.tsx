import { Input } from '../components/form/Input';
import { Form, useForm } from 'graneet-form';
import { MouseEventHandler } from "react";

export const SimpleForm = () => {
  const form = useForm()

  const handleGetValues: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(form.getFormValues());
  }

  return (
    <Form form={form}>
      SimpleForm
      <Input name="firstName">
      </Input>
      <button type="submit" onClick={handleGetValues}>
        Get Values
      </button>
    </Form>
  )
}
