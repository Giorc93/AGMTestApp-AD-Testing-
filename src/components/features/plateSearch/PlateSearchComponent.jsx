import React from "react";

//TODO: Add styles to form

import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { savePlateNumber, getVehicleDataByPlate } from "./plateDataSlice";

const PlateSearchComponent = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  return <></>;
};

export default withRouter(PlateSearchComponent);
