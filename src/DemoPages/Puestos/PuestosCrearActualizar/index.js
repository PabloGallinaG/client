import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createPuesto,
  getPuestoById,
  updatePuesto,
} from "../../../services/puestosService";
import Loader from "react-loaders";

import PuestosForm from "./PuestosForm";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const PuestosCrearActualizar = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [puesto, setPuesto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingReadData, setLoadingReadData] = useState(false);
  // get id from url
  const { id } = useParams();
  const history = useHistory();

  const getPuestoUpdate = async (puesto) => {
    setLoadingReadData(true);
    console.log("id3", id);
    setIsUpdate(true);
    const puestoData = await getPuestoById(puesto);
    setPuesto(puestoData);
    setLoadingReadData(false);
  };

  useEffect(() => {
    console.log("id", id);
    if (id) {
      console.log("id2", id);
      getPuestoUpdate(id);
    }

    return () => {
      setIsUpdate(false);
      setPuesto({});
    };
  }, [id]);

  console.log("emp", puesto);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("data", data);
    // same shape as initial values
    if (isUpdate) {
      console.log("is Udpate", id);
      const puesto_udated = await updatePuesto(id, data);

      if (puesto_udated) {
        history.push("/puestos/listado");
      }
      setLoading(false);
    } else {
      console.log("create");
      const puesto_crated = await createPuesto(data);

      if (puesto_crated) {
        history.push("/puestos/listado");
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
        <PuestosForm
          onSubmit={onSubmit}
          isUpdate={isUpdate}
          initialValues={puesto ? puesto : {}}
          loading={loading}
        />
      )}
    </Fragment>
  );
};

export default PuestosCrearActualizar;
