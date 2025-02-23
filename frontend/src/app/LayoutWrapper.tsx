"use client";

import Loader from "@/lib/Loader";
import { persistor, store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {children}
        <Toaster />
      </PersistGate>
    </Provider>
  );
};

export default LayoutWrapper;
