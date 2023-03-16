import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createEmpleado,
  getEmpleadoById,
  updateEmpleado,
} from "../../../services/empleadosService";
import Loader from "react-loaders";

import EmpleadosForm from "./EmpleadosForm";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const EmpleadosCrearActualizar = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [empleado, setEmpleado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingReadData, setLoadingReadData] = useState(false);
  // get id from url
  const { id } = useParams();
  const history = useHistory();

  const getEmpleadoUpdate = async (empleado) => {
    setLoadingReadData(true);
    console.log("id3", id);
    setIsUpdate(true);
    const empleadoData = await getEmpleadoById(empleado);
    setEmpleado(empleadoData);
    setLoadingReadData(false);
  };

  useEffect(() => {
    console.log("id", id);
    if (id) {
      console.log("id2", id);
      getEmpleadoUpdate(id);
    }

    return () => {
      setIsUpdate(false);
      setEmpleado({});
    };
  }, [id]);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("data", data);
    // same shape as initial values
    if (isUpdate) {
      console.log("is Udpate", id);
      const data_created = await updateEmpleado(id, data);

      if (data_created) {
        history.push("/empleados/listado");
      }
      setLoading(false);
    } else {
      const data_updated = await createEmpleado(data);

      if (data_updated) {
        history.push("/empleados/listado");
      }
      setLoading(false);
    }
  };
  return (
    <Fragment>
      {/* <PageTitle
                    heading=""
                    subheading="These boxes are usually for dashboard elements centered around users and profiles."
                    icon="pe-7s-science icon-gradient bg-happy-itmeo"
                /> */}
      {/* <ListBoxes/>
                <ProfileBlocks/> */}
      {loadingReadData ? (
        <div className="d-flex justify-content-center align-items-center h-50">
          <Loader type="ball-pulse" />
        </div>
      ) : (
        <EmpleadosForm
          onSubmit={onSubmit}
          isUpdate={isUpdate}
          initialValues={
            empleado
              ? empleado
              : {
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
                }
          }
          loading={loading}
        />
      )}
    </Fragment>
  );
};

export default EmpleadosCrearActualizar;
