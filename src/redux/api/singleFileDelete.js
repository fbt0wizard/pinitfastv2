import axios from "axios";
import { triggerAlert } from "../slices/alertSlice";
import { exitUser } from "../slices/authySlice";
import { processing, processingComplete } from "../slices/imageAndDocSlice";
import { getData } from "./fetchAllInfo";

const API_PATH = "http://localhost:8080/backend/test.php";


export const deleteSingle = async (item, dispatch) => {
    dispatch(processing())
    try {
        const res = await axios.post(API_PATH, item)
        if(res.data === "success") {
            dispatch(processingComplete())
            getData('fbt_wizard', dispatch)
            dispatch(triggerAlert('file deleted'))
        }else if(res.data === 'logged out') {
            dispatch(exitUser())
        }
    } catch (err) {
        console.log(err)
    }
}