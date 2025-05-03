import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../services/CountriesServices";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
