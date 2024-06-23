// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleValidation = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      setSubmittedData(values);
    }
  };

  return {
    values,
    errors,
    submittedData,
    handleChange,
    handleSubmit
  };
};

export default useForm;
