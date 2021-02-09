import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import {
  selectReferencesResponse,
  getReferencesList,
} from "../getReferencesList/getReferencesListSlice";
import {
  getVehicleDataByRef,
  resetVehicleDataState,
} from "./referenceDataSlice";
import {
  getBrandsList,
  selectBrandsResponse,
} from "../getBrandsList/getBrandsListSlice";

const ReferenceSearchComponent = () => {
  const dispatch = useDispatch();

  const referencesData = useSelector(selectReferencesResponse);

  const brandsData = useSelector(selectBrandsResponse);

  return <></>;
};

export default withRouter(ReferenceSearchComponent);
