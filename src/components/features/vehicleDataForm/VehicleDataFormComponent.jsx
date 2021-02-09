import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveVehicleData, savePlaceData } from "./vehicleDataSlice";

const vehicleDataFormComponent = () => {
  const placeData = useSelector(selectPlaceResponse);

  const dispatch = useDispatch();

  return <> </>;
};

export default withRouter(vehicleDataFormComponent);
