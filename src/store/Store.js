import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

// Создание хранилища (store)
const store = configureStore({
  reducer: reducer,
});

export default store;
