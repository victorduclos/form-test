import { Input } from '../components/form/Input';
import { Form, useForm } from 'graneet-form';
import { MouseEventHandler } from "react";

type MyForm = {
  firstName: string;

  lastName: string;
}

export const SimpleForm = () => {
  const form = useForm<MyForm>()

  const handleGetValues: MouseEventHandler<HTMLButtonElement> = () => {
    const formValues = form.getFormValues();
  }

  return (
    <Form form={form}>
      SimpleForm
      <Input<MyForm> name="firstName" />
      <button type="submit" onClick={handleGetValues}>
        Get Values
      </button>
    </Form>
  )
}
