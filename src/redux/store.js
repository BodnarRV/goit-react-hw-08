import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import { autReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: autReducer,
  },
});
