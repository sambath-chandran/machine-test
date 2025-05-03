import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesList: [],
  error: false,
  countriesLoading: false,
};

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    const response = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await response.json();
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.error = false;
        state.countriesLoading = true;
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.countriesLoading = false;
        state.countriesList = action.payload;
      })
      .addCase(fetchAllCountries.rejected, (state) => {
        state.countriesLoading = false;
        state.error = true;
      });
  },
});

export default countriesSlice.reducer;
