
import { triggerAlert } from "../slices/alertSlice";
import axios from "axios";
import { getData } from "./fetchAllInfo";
import { deleteNode } from "../slices/allDataSlice";
import { processing, processingComplete } from "../slices/imageAndDocSlice";
import { exitUser } from "../slices/authySlice";

const API_PATH = "http://localhost:8080/backend/test.php";

export const deleteAll = async (id, dispatch) => {
    dispatch(deleteNode(id))
  const prep = {
    deleteItem: id,
  };
  dispatch(processing())
  try {
    const res = await axios.post(API_PATH, prep);
    if(res.data === "success") {
        dispatch(processingComplete())
        dispatch(triggerAlert('successfully deleted'));
        getData('fbt_wizard', dispatch)
    }else if(res.data === 'logged out') {
      dispatch(exitUser())
    }
  } catch (err) {

  }
};