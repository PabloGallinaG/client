import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
import PuestosListado from "./PuestosListado";
import PuestosCrearActualizar from "./PuestosCrearActualizar";

const Puestos = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Puestos Crud */}
          <Route path={`${match.url}/listado`} component={PuestosListado} />
          <Route
            path={`${match.url}/crear`}
            component={PuestosCrearActualizar}
          />
          <Route
            path={`${match.url}/:id/editar`}
            component={PuestosCrearActualizar}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Puestos;
