import React, { Fragment } from "react";
import DataTableBasic from "../../Tables/DataTables/Examples/Basic";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SweetAlert from "sweetalert-react";
import { getPuestos, deletePuesto } from "../../../services/puestosService";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const PuestosListado = () => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      columns: [
        {
          Header: "Nombre",
          accessor: "nombre",
        },
        {
          Header: "Acciones",
          accessor: "PuestosID",
          Cell: (props) => (
            <div className="d-flex justify-content-end">
              <NavLink to={`/puestos/${props.value}/editar`}>
                <Button className="mb-2 mr-2" color="primary">
                  Editar
                </Button>
              </NavLink>

              <Button
                className="mb-2 mr-2"
                color="danger"
                onClick={() =>
                  handleToggleAlert(props.value ? props.value : null)
                }
              >
                Eliminar
              </Button>
            </div>
          ),
        },
      ],
    },
  ]);

  const [puestos, setPuestos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    show: false,
    id_puesto: null,
  });

  const { show, id_puesto } = alertData;

  const handleToggleAlert = (id_data = null) => {
    if (id_data) {
      setAlertData({
        show: !alertData.show,
        id_puesto: id_data,
      });
    } else {
      setAlertData({
        ...alertData,
        show: !alertData.show,
      });
    }
  };

  const getData = async () => {
    setLoading(true);
    const data = await getPuestos();
    setPuestos(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setPuestos([]);
    };
  }, []);

  return (
    <Fragment>
      {/* <PageTitle
                    heading=""
                    subheading="These boxes are usually for dashboard elements centered around users and profiles."
                    icon="pe-7s-science icon-gradient bg-happy-itmeo"
                /> */}
      {/* <ListBoxes/>
                <ProfileBlocks/> */}
      <SweetAlert
        title="Estas seguro?"
        confirmButtonColor=""
        show={show}
        text="El registro se eliminara!"
        type="warning"
        confirmButtonText="Si, eliminar!"
        cancelButtonText="No, cancelar!"
        showCancelButton
        onConfirm={async () => {
          setLoading(true);
          await deletePuesto(id_puesto);
          handleToggleAlert();
          getData();
          setLoading(false);
        }}
        onCancel={() => handleToggleAlert()}
      />

      <NavLink to="/puestos/crear">
        <Button className="mb-2 mr-2" color="primary">
          Crear Puesto
        </Button>
      </NavLink>
      <DataTableBasic
        columns={columns}
        mostrarTitulo={false}
        data={puestos}
        loading={loading}
      />
    </Fragment>
  );
};

export default PuestosListado;
