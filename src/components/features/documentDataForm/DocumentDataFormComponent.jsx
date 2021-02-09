import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { saveDocumentData } from "./documentDataSlice";
import { idTypeArr } from "../../utils/inputArrays";

const DocumentDataFormComponent = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  return <></>;
};

export default withRouter(DocumentDataFormComponent);
