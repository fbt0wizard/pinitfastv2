import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  progress: "0%",
  height: 0,
};

const uploaderSlice = createSlice({
  name: "UPLOAD_DATA",
  initialState,
  reducers: {
    uploadStart: (state) => {
      state.status = true;
      state.height = 4;
    },
    uploadComplete: (state) => {
      state.status = null;
      state.progress = "0%";
      state.height = 0;
    },
    uploadFailed: (state) => {
      state.status = null;
    },
    uploadingProgress: (state, action) => {
      state.progress = action.payload.toString() + "%";
    },
    processing: (state) => {
        state.progress = "100%"
        state.height = 4
    },
    processingComplete: (state) => {
        state.progress = "0%"
        state.height = 0
    },
  },
});

export default uploaderSlice.reducer;
export const {
  uploadStart,
  uploadComplete,
  uploadFailed,
  addFilesToState,
  uploadingProgress,
  processing,
  processingComplete
} = uploaderSlice.actions;
