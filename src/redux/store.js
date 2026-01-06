import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import todosReducer from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});
