import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";
import { selectUserData } from "../userDataForm/userDataSlice";
import { getQuotation } from "./getQuotationSlice";

const GetQuotationComponent = () => {
  const dispatch = useDispatch();

  return <></>;
};

export default withRouter(GetQuotationComponent);
