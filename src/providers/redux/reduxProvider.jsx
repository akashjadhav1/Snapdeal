"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ReduxLoader from "./reduxLoader";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ReduxLoader />
      {children}
    </Provider>
  );
}