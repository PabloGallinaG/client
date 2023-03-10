import React, { Fragment } from "react";
import DataTableBasic from "../../Tables/DataTables/Examples/Basic";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        id: "lastName",
        accessor: (d) => d.lastName,
      },
    ],
  },
];

export default class EmpleadosListado extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <PageTitle
                    heading=""
                    subheading="These boxes are usually for dashboard elements centered around users and profiles."
                    icon="pe-7s-science icon-gradient bg-happy-itmeo"
                /> */}
        {/* <ListBoxes/>
                <ProfileBlocks/> */}

        <NavLink to="/empleados/crear">
          <Button className="mb-2 mr-2" color="primary">
            Crear Empleado
          </Button>
        </NavLink>
        <DataTableBasic columns={columns} mostrarTitulo={false} />
      </Fragment>
    );
  }
}
