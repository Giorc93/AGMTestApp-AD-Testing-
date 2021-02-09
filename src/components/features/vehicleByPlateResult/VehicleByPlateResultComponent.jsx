import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";

const VehicleByPlateResult = () => {
  const plateResponse = useSelector(selectPlateResponse);

  return <></>;
};

export default withRouter(VehicleByPlateResult);
