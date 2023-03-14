import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  createEmpleado,
  getEmpleadoById,
  updateEmpleado,
} from "../../../services/empleadosService";

import EmpleadosForm from "./EmpleadosForm";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const EmpleadosCrearActualizar = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [empleado, setEmpleado] = useState(null);
  // get id from url
  const { id } = useParams();

  const getEmpleadoUpdate = async (empleado) => {
    console.log("id3", id);
    setIsUpdate(true);
    const empleadoData = await getEmpleadoById(empleado);
    setEmpleado(empleadoData);
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

  const onSubmit = (data) => {
    console.log("data", data);
    // same shape as initial values
    if (isUpdate) {
      console.log("is Udpate", id);
      updateEmpleado(id, data);
    } else {
      createEmpleado(data);
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

      <EmpleadosForm
        onSubmit={onSubmit}
        isUpdate={isUpdate}
        initialValues={empleado ? empleado : {}}
      />
    </Fragment>
  );
};

export default EmpleadosCrearActualizar;
