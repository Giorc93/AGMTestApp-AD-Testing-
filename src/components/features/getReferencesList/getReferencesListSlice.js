import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//API Req. using test token
export const getReferencesList = createAsyncThunk(
  "place/getReferencesList",
  async (vehicleData) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6Ims4aVU1SjhMZXFvRU9XYVU1bFkxbEE9PSIsInZhbHVlIjoiUTZkaWJwck5rVW9ydFBIZjVVQzRzekVZZjRWSGxRc0xwUU1XZFdmS0Z1NDRHNHRpM0MwSUxZMlwvbzBOcGo0QTciLCJtYWMiOiIzZmVjMmMwMzQ4ZTQwYjEyZDgxMGM4MjA0MjhmMjhlMWEwMDlhMjdlOWU5NDNkOWIzZmEwM2MwMjg3ODkwMWQwIn0%3D; agentemotor_session=eyJpdiI6IkZiUVdIMWVZbm9IVWo2ZW9zU1BWc3c9PSIsInZhbHVlIjoiOE1xU29OU3B4cGIrYkhWSEhqUnE0T01RRnByMVVyRG5pTE4ySmRMaHNSWjlTXC93OXRCYngrRHA3MEtCM2MxVDciLCJtYWMiOiI3YjExNGVhODU0MWYyZGE0ZGM1ODg4ZTkzMjAxZmNhYzEzZGMzYWE1MTRkMTUzNmJmNDVjZjE4OGQ4MDEwYTgzIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-object-by-ref",
      data: {
        vehicle: {
          return: "part-first-line",
          brand: vehicleData.brand,
          model: parseInt(vehicleData.model),
        },
      },
      timestamp: "30072020",
      origin: "postman",
    });

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "http://api.app.agentemotor.com/insurances/insuranceobject/actions/get",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  referencesResponseData: {
    data: [],
    status: "null",
  },
};

const getReferencesListSlice = createSlice({
  name: "getReferencesList",
  initialState,
  reducers: {
    resetReferencesListState: (state) => initialState,
  },
  extraReducers: {
    [getReferencesList.pending]: (state, action) => {
      state.referencesResponseData.status = "loading";
    },
    [getReferencesList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.referencesResponseData.data = action.payload;
      state.referencesResponseData.status = "success";
    },
    [getReferencesList.rejected]: (state, action) => {
      state.referencesResponseData.status = "failed";
    },
  },
});

export const { resetReferencesListState } = getReferencesListSlice.actions;

//Exp. state value (useSelector)
export const selectReferencesResponse = (state) =>
  state.referencesListData.referencesResponseData;

export default getReferencesListSlice.reducer;
