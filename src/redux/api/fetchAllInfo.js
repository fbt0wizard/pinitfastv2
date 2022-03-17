import {
  fetchDataStart,
  fetchDataCompleted,
  fetchDataFailed,
  newUser,
} from "../slices/allDataSlice";
import axios from "axios";
import { exitUser } from "../slices/authySlice";

const API_PATH = "http://localhost:8080/backend/test.php";

export const getData = async (user, dispatch) => {
  dispatch(fetchDataStart());
  const prep = {
      getChats: user
  }
  try {
    const res = await axios.post(
    API_PATH,
    prep
    );
    if(res.data === 'logged out') {
      dispatch(exitUser())
    }else if (res.data === 'no data') {
      dispatch(newUser())
    }else{
      dispatch(fetchDataCompleted(res.data))
    }
  } catch (err) {
    dispatch(fetchDataFailed());
  }
};
