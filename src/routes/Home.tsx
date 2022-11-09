import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        test
        <Outlet />
      </>
    );
  }
}
