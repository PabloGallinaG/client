import React from "react";

import Select from "react-select";

const InputSelectValidation = ({
  errors,
  touched,
  value,
  key_name,
  options = [],
  isMulti = false,
  handleChange,
}) => {
  const error = errors[key_name] && touched[key_name];

  return (
    <div className="flex-grow-1 d-flex flex-column mr-3 mb-3">
      <Select
        // key={defaultOptionValue}
        className={`w-100 ${error ? "border border-danger" : ""}`}
        placeholder="Seleccione una opción"
        value={value ? value : []}
        isMulti={isMulti}
        onChange={(val) => {
          if (isMulti) console.log(val);
          handleChange(key_name, val);
        }}
        options={options}
      />
      {error && <div className="text-danger">{errors[key_name]}</div>}
    </div>
  );
};

export default InputSelectValidation;
