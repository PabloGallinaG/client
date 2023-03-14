// import { Field } from "formik";
import React from "react";
import DatePicker from "react-datepicker";

const DatePickerField = ({ name, value, className, onChange }) => {
  return (
    <DatePicker
      className={className}
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/mm/yyyy"
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        onChange(name, val);
      }}
    />
  );
};

const InputDateValidation = ({
  errors,
  touched,
  value,
  key_name,
  handleChange,
}) => {
  const error = errors[key_name] && touched[key_name];
  return (
    <div className="flex-grow-1 d-flex flex-column mr-3 mb-3">
      <DatePickerField
        name={key_name}
        className={`form-control ${error ? "border border-danger" : ""}`}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="text-danger">{errors[key_name]}</div>}
    </div>
  );
};

export default InputDateValidation;
