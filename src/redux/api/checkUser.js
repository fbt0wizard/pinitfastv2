import axios from "axios";
import { userInfo } from "../slices/allDataSlice";
import { authSucess, redirect } from "../slices/authySlice";

export const checkStatus = async (dispatch) => {
  try {
    const res = await axios.post("test.php", { test: "test" });
    if (res.data === "logged out") {
      dispatch(redirect(res.data));
    } else {
      dispatch(userInfo(res.data));
      dispatch(authSucess());
    }
  } catch (err) {
    console.log(err);
  }
};
