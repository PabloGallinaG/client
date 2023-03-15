import React, { Fragment } from "react";
import DataTableBasic from "../../Tables/DataTables/Examples/Basic";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  deleteEmpleado,
  getEmpleados,
} from "../../../services/empleadosService";
import SweetAlert from "sweetalert-react";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const EmpleadosListado = () => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      columns: [
        {
          Header: "Primer Nombre",
          accessor: "primer_nombre",
        },
        {
          Header: "Primer Apellido",
          id: "primer_apellido",
          accessor: "primer_apellido",
        },
        // action buttons
        {
          Header: "Acciones",
          accessor: "EmpleadoID",
          Cell: (props) => (
            <div className="d-flex justify-content-end">
              <NavLink to={`/empleados/${props.value}/editar`}>
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

  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    show: false,
    id_empleado: null,
  });

  const { show, id_empleado } = alertData;

  const handleToggleAlert = (id_data = null) => {
    if (id_data) {
      setAlertData({
        show: !alertData.show,
        id_empleado: id_data,
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
    const data = await getEmpleados();
    setEmpleados(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setEmpleados([]);
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
          await deleteEmpleado(id_empleado);
          handleToggleAlert();
          getData();
          setLoading(false);
        }}
        onCancel={() => handleToggleAlert()}
      />

      <NavLink to="/empleados/crear">
        <Button className="mb-2 mr-2" color="primary">
          Crear Empleado
        </Button>
      </NavLink>
      <DataTableBasic
        columns={columns}
        mostrarTitulo={false}
        data={empleados}
        loading={loading}
      />
    </Fragment>
  );
};

export default EmpleadosListado;
