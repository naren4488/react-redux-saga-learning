// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

// export default configureStore({
//   reducer: { rootReducer },
// });
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
