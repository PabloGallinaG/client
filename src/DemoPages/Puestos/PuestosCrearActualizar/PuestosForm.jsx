import React from "react";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import { Button } from "reactstrap";
import InputValidation from "../../Components/InputValidation/InputValidation";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Este campo es requerido"),
});

const PuestosForm = ({
  onSubmit,
  isUpdate = false,
  initialValues = {
    nombre: "",
  },
  loading = false,
}) => {
  // console.log("initialValues", initialValues);
  return (
    <div>
      <h1>{isUpdate ? "Editar" : "Crear"} Puesto</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="d-flex flex-column flex-md-row">
              <InputValidation
                errors={errors}
                touched={touched}
                value={values.nombre}
                key_name="nombre"
                placeholder="Nombre del puesto"
              />

              <div className="flex-grow-1 d-flex flex-column mr-3 mb-3" />
            </div>

            <Button
              className="mb-2 mr-2"
              color="primary"
              type="submit"
              disabled={loading}
            >
              {isUpdate ? "Editar" : "Crear"} Puesto
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PuestosForm;
