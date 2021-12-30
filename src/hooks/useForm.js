import { useState } from 'react';
import Joi from 'joi';

export const useForm = (formCustomValues = {}, formSubmitFunction = {}) => {
  const initialValues = formCustomValues.initialValues;
  const [formValues, setFormValues] = useState({ values: initialValues });

  const customValidation = formCustomValues.validate;
  const schemaValidation = formCustomValues.validationSchema;

  const [errorStore, setErrorStore] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    const formData = { ...formValues.values };
    formData[input.name] = input.value;
    setFormValues({ values: formData });

    if (customValidation) {
      const errors = { ...errorStore };
      const errorMessage = customValidation(formData);
      if (errorMessage[input.name])
        errors[input.name] = errorMessage[input.name];
      else delete errors[input.name];
      setErrorStore(errors);
    }

    if (schemaValidation) {
      const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = Joi.object({
          [name]: schemaValidation[name],
        });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
      };

      const errors = { ...errorStore };
      const errorMessage = validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];
      setErrorStore(errors);
    }
  };
  const submitForm = () => {
    if (
      customValidation &&
      Object.keys(customValidation(formValues.values)).length !== 0
    ) {
      setErrorStore(customValidation(formValues));
      return;
    }

    const validateOnSubmit =
      schemaValidation &&
      Joi.object(schemaValidation).validate(formValues.values);
    if (schemaValidation && validateOnSubmit.error) {
      const { error } = validateOnSubmit;
      const path = error.details[0].path[0];
      const message = error.details[0].message;
      setErrorStore({ [path]: message });
      return;
    }
    formSubmitFunction.onSubmit(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errorStore).length !== 0) return;
    submitForm();
  };

  const reset = () => {
    setFormValues({ values: initialValues });
  };

  return {
    values: formValues.values,
    errors: errorStore,
    handleSubmit,
    handleChange,
    reset,
  };
};
