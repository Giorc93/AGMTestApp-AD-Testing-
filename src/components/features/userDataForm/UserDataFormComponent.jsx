import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveUserData, savePlaceData } from "./userDataSlice";

const UserDataFormComponent = () => {
  const placeData = useSelector(selectPlaceResponse);

  const dispatch = useDispatch();

  return <></>;
};

export default withRouter(UserDataFormComponent);
