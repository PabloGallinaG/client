import React, { Fragment } from "react";

import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import EmpleadosForm from "./EmpleadosForm";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

export default class EmpleadosCrearActualizar extends React.Component {
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

        <EmpleadosForm />
      </Fragment>
    );
  }
}
