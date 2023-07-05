import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IComment from "../../types/comment";
import {  RootState } from "../store";



interface CommentsState {
  comments: IComment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.comments = action.payload;
      state.loading = false;
      state.error = null;
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      state.comments.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    removeComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setComments, addComment, removeComment, setLoading, setError } = commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments.comments;
export const selectLoading = (state: RootState) => state.comments.loading;
export const selectError = (state: RootState) => state.comments.error;

export default commentsSlice.reducer;