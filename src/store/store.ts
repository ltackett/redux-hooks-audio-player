import { RootState, rootReducer } from "./rootReducer";
import { createStore } from "redux";

export const store = createStore<RootState, any, null, null>(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
