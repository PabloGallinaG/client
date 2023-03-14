import React from "react";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import { Button } from "reactstrap";
import InputValidation from "../../Components/InputValidation/InputValidation";
import InputDateValidation from "../../Components/InputValidation/InputDateValidation";
import InputSelectValidation from "../../Components/InputValidation/InputSelectValidation";
import {
  departamentosOptions,
  municipiosOptions,
  puestosOption,
} from "../../../utils/constantes";

const SignupSchema = Yup.object().shape({
  primer_nombre: Yup.string().required("Este campo es requerido"),
  primer_apellido: Yup.string().required("Este campo es requerido"),
  fecha_nacimiento: Yup.date().required("Este campo es requerido"),
  dpi: Yup.number().required("Este campo es requerido"),
  nit: Yup.number().required("Este campo es requerido"),
  cantidad_hijos: Yup.number().required("Este campo es requerido"),
  correo: Yup.string()
    .email("Invalid email")
    .required("Este campo es requerido"),
  departamento: Yup.object().required("Este campo es requerido"),
  municipio: Yup.object().required("Este campo es requerido"),
});

const EmpleadosForm = ({
  onSubmit,
  isUpdate = false,
  initialValues = {
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    direccion: "",
    fecha_nacimiento: "",
    dpi: "",
    nit: "",
    correo: "",
    cantidad_hijos: "",
    departamento: "",
    municipio: "",
    salario: "",
    puestos: "",
  },
}) => {
  // console.log("initialValues", initialValues);
  return (
    <div>
      <h1>{isUpdate ? "Editar" : "Crear"} Empresa</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.primer_nombre}
                key_name="primer_nombre"
                placeholder="Primer Nombre"
              />

              <InputValidation
                errors={errors}
                touched={touched}
                value={values.segundo_nombre}
                key_name="segundo_nombre"
                placeholder="Segundo Nombre"
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.primer_apellido}
                key_name="primer_apellido"
                placeholder="Primer Apellido"
              />

              <InputValidation
                errors={errors}
                touched={touched}
                value={values.segundo_apellido}
                key_name="segundo_apellido"
                placeholder="Segundo Apellido"
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.direccion}
                key_name="direccion"
                placeholder="Direccion"
              />

              <InputDateValidation
                errors={errors}
                touched={touched}
                value={values.fecha_nacimiento}
                key_name="fecha_nacimiento"
                handleChange={setFieldValue}
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.dpi}
                key_name="dpi"
                placeholder="DPI"
                type="number"
              />

              <InputValidation
                errors={errors}
                touched={touched}
                value={values.nit}
                key_name="nit"
                placeholder="NIT"
                type="number"
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.cantidad_hijos}
                key_name="cantidad_hijos"
                placeholder="Cantidad de Hijos"
                type="number"
              />

              <InputValidation
                errors={errors}
                touched={touched}
                value={values.correo}
                key_name="correo"
                placeholder="Correo"
                type="email"
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputSelectValidation
                errors={errors}
                touched={touched}
                value={values.departamento}
                key_name="departamento"
                placeholder="Departamento"
                handleChange={setFieldValue}
                options={departamentosOptions}
                // defaultOptionValue={isUpdate ? values.departamento - 1 : null}
              />

              <InputSelectValidation
                options={
                  municipiosOptions[
                    values && values.departamento ? values.departamento.id : ""
                  ]
                }
                errors={errors}
                touched={touched}
                value={values.municipio}
                key_name="municipio"
                placeholder="Municipio"
                handleChange={setFieldValue}
              />
            </div>

            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.salario}
                key_name="salario"
                placeholder="Salario"
                type="number"
              />
              <InputSelectValidation
                errors={errors}
                touched={touched}
                value={values.puestos}
                key_name="puestos"
                placeholder="Puestos"
                handleChange={setFieldValue}
                options={puestosOption}
                isMulti
              />
            </div>

            <Button className="mb-2 mr-2" color="primary" type="submit">
              {isUpdate ? "Editar" : "Crear"} Empleado
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmpleadosForm;
