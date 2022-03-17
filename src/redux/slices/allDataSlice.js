import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";

const initialState = {
  user: [],
  status: null,
  loading: true,
  dataReturned: [],
  friends: {},
  liveInput: "",
  rollUp: false,
  virgin: false
};

const allData = createSlice({
  name: "USER_DATA",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.status = "pending";
    },
    fetchDataCompleted: (state, action) => {
      state.status = null;
      state.loading = false;
      state.dataReturned = action.payload;
      state.virgin = false;
    },
    fetchDataFailed: (state) => {
      state.status = "failed";
    },
    userInfo: (state, action) => {
      state.user = action.payload
    },
    instantChatUpdate: (state, action) => {
      state.dataReturned.push({
        id: uuid.v4(),
        value: action.payload,
        status: false,
        sender: "",
        date: "just now",
      });
      state.rollUp = !state.rollUp;
      state.virgin = false;
    },
    handleLiveInput: (state, action) => {
      state.liveInput = action.payload;
    },
    deleteNode: (state, action) => {
      state.dataReturned.splice(
        state.dataReturned.findIndex((item) => item.id === action.payload),
        1
      );
    },
    setFriends : (state, action) => {
      state.friends = action.payload
    },
    updateFriends : (state, action) => {
      state.friends.splice(
        state.friends.findIndex((item) => item.id === action.payload),
        1
      );
    },
    newUser: (state) => {
      state.status = null;
      state.loading = false;
      state.virgin = true;
    }
  },
});

export const {
  fetchDataStart,
  fetchDataCompleted,
  fetchDataFailed,
  instantChatUpdate,
  handleLiveInput,
  deleteNode,
  setFriends,
  deleteSingleFileInArray,
  updateFriends,
  userInfo,
  newUser
} = allData.actions;
export default allData.reducer;
