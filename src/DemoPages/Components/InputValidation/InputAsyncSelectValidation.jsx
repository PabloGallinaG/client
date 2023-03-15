import React from "react";
import { useState, useEffect } from "react";

import Select from "react-select";
import { getPuestos } from "../../../services/puestosService";

const InputAsyncSelectValidation = ({
  errors,
  touched,
  value,
  key_name,
  // options = [],
  isMulti = false,
  handleChange,
}) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const error = errors[key_name] && touched[key_name];

  const loadOptions = async (inputValue) => {
    setIsLoading(true);

    const data = await getPuestos();
    const newOptions = data.map((item) => ({
      value: item.PuestosID,
      label: item.nombre,
    }));
    setOptions(newOptions);
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) {
        await loadOptions();
        // setOptions(data);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  console.log(options);

  return (
    <div className="flex-grow-1 d-flex flex-column mr-3 mb-3">
      <Select
        // key={defaultOptionValue}
        className={`w-100 ${error ? "border border-danger" : ""}`}
        placeholder="Seleccione una opción async"
        isLoading={isLoading}
        loadingMessage={() => "Cargando..."}
        // onInputChange={(inputValue) => loadOptions(inputValue)}
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

export default InputAsyncSelectValidation;
