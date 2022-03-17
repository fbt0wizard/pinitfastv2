import axios from "axios";
import { triggerAlert, triggerErr } from "../slices/alertSlice";
import { exitUser } from "../slices/authySlice";
import { processing, processingComplete } from "../slices/imageAndDocSlice";

const API_PATH = "http://localhost:8080/backend/test.php";


export const shareSingleData = async (data, dispatch) => {
    if(data.reciever.length < 2) {
        dispatch(triggerErr('no user selected'))
        return false
    }else if(data.reciever === data.sender) {
        dispatch(triggerErr("You can't share to yourself"))
        return false
    }
    dispatch(processing())
    try {
        const res = await axios.post(API_PATH, data)
        if(res.data === "success") {
            dispatch(processingComplete())
            dispatch(triggerAlert("content shared"))
        }else if(res.data === "savedsuccess") {
            dispatch(processingComplete())
            dispatch(triggerAlert("user saved"))
            dispatch(triggerAlert("content shared"))
        }else if(res.data === 'logged out') {
            dispatch(exitUser())
        } else {
            dispatch(processingComplete())
            dispatch(triggerErr(res.data))
        }
    } catch (err) {

    }
}

export const shareAllFromDashboard = async (items, dispatch) => {
    if(items.reciever.length < 2) {
        dispatch(triggerErr('no user selected'))
        return false
    }else if(items.reciever === items.sender) {
        dispatch(triggerErr("You can't share to yourself"))
        return false
    }
    dispatch(processing())
    try {
        const res = await axios.post(API_PATH, items)
        if(res.data === "success") {
            dispatch(processingComplete())
            dispatch(triggerAlert("content shared"))
        }else if(res.data === "savedsuccess") {
            dispatch(processingComplete())
            dispatch(triggerAlert("user saved"))
            dispatch(triggerAlert("content shared"))
        }else if(res.data === 'logged out') {
            dispatch(exitUser())
        } else {
            dispatch(processingComplete())
            dispatch(triggerErr(res.data))
        }
    } catch (err) {

    }
}