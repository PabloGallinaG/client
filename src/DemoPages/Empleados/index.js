import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
import EmpleadosListado from "./EmpleadosListado";
import EmpleadosCrearActualizar from "./EmpleadosCrearActualizar";

const Empleados = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Empleados Crud */}
          <Route path={`${match.url}/listado`} component={EmpleadosListado} />
          <Route
            path={`${match.url}/crear`}
            component={EmpleadosCrearActualizar}
          />
          <Route
            path={`${match.url}/:id/editar`}
            component={EmpleadosCrearActualizar}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Empleados;
