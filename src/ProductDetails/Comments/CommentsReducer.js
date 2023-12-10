import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: {},
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments = [ ...state.comments, { ...action.payload}];
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { addComment, setComment, setComments} = commentsSlice.actions;
export default commentsSlice.reducer;
