import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { data: [], loading: false, error: null },
  reducers: {
    fetchTodosStart: (state) => { state.loading = true; state.error = null; },
    fetchTodosSuccess: (state, action) => { state.loading = false; state.data = action.payload; },
    fetchTodosFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  },
});

export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } = todosSlice.actions;
export default todosSlice.reducer;
