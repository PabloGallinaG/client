import { Field } from "formik";
import React from "react";

const InputValidation = ({
  errors,
  touched,
  value,
  key_name,
  placeholder,
  type = "text",
  minValue = false,
}) => {
  const error = errors[key_name] && touched[key_name];
  return (
    <div className="flex-grow-1 d-flex flex-column mr-3 mb-3">
      <Field
        id={key_name}
        name={key_name}
        placeholder={placeholder}
        className={`form-control ${error ? "border border-danger" : ""}`}
        value={value}
        type={type}
        min={minValue ? minValue : null}
        step="any"
      />
      {error && <div className="text-danger">{errors[key_name]}</div>}
    </div>
  );
};

export default InputValidation;
