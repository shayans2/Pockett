import * as React from 'react';

import Joi from 'joi';

type KeyValue<V> = { [key: string]: V };

interface FormCustomValues {
  initialValues?: KeyValue<string>;
  validate?: (formData: KeyValue<string>) => {};
  validationSchema?: {};
}

interface FormSubmitFunction {
  onSubmit: (values: { values: KeyValue<string> | undefined }) => void;
}

export const useForm = (
  formCustomValues: FormCustomValues = {},
  formSubmitFunction: FormSubmitFunction = {
    onSubmit: function (): never {
      throw new Error('Function not implemented.');
    },
  },
) => {
  const initialValues: KeyValue<string> | undefined =
    formCustomValues.initialValues;
  const [formValues, setFormValues] = React.useState<
    KeyValue<string> | undefined
  >(initialValues);

  const customValidation = formCustomValues.validate;
  const schemaValidation = formCustomValues.validationSchema;

  const [errorStore, setErrorStore] = React.useState<KeyValue<string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = { ...formValues };
    formData[e.currentTarget.name] = e.currentTarget.value;
    setFormValues(formData);

    if (customValidation) {
      const errors = { ...errorStore };
      const errorMessage: KeyValue<string> = customValidation(formData);
      if (errorMessage[e.currentTarget.name])
        errors[e.currentTarget.name] = errorMessage[e.currentTarget.name];
      else delete errors[e.currentTarget.name];
      setErrorStore(errors);
    }

    if (schemaValidation) {
      const validateProperty = ({ name, value }: HTMLInputElement) => {
        const obj = { [name]: value };
        const schema = Joi.object({
          [name]: schemaValidation[name],
        });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
      };

      const errors = { ...errorStore };
      const errorMessage: string = validateProperty(e.currentTarget);
      const inputName: string = e.currentTarget.name;
      if (errorMessage) {
        errors[inputName] = errorMessage;
      } else {
        delete errors[inputName];
      }
      setErrorStore(errors);
    }
  };

  const submitForm = () => {
    if (
      customValidation &&
      formValues &&
      Object.keys(customValidation(formValues)).length !== 0
    ) {
      setErrorStore(customValidation(formValues));
      return;
    }

    const validateOnSubmit: Joi.ValidationResult =
      // schemaValidation &&
      Joi.object(schemaValidation).validate(formValues);

    if (schemaValidation && validateOnSubmit.error) {
      const { error } = validateOnSubmit;
      const path = error.details[0].path[0];
      const message = error.details[0].message;
      setErrorStore({ [path]: message });
      return;
    }

    formSubmitFunction.onSubmit({ values: formValues });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errorStore).length !== 0) return;
    submitForm();
  };

  const reset = () => {
    setFormValues(initialValues);
  };

  return {
    values: formValues,
    errors: errorStore,
    handleSubmit,
    handleChange,
    reset,
  };
};
