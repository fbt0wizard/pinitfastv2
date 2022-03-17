import axios from "axios";
import { triggerAlert, triggerErr } from "../slices/alertSlice";
import { updateFriends } from "../slices/allDataSlice";
import { exitUser } from "../slices/authySlice";
import { processing, processingComplete } from "../slices/imageAndDocSlice";

const API_PATH = "http://localhost:8080/backend/test.php";

export const deleteFriendUser = async (id, dispatch) => {
    if(id.deleteUser === null) {
        dispatch(triggerErr('Please select user to delete'))
        return
    }
    dispatch(processing())
    dispatch(updateFriends(id.deleteUser))
    try {
        const res = await axios.post(API_PATH, id)
        if(res.data === "success") {
            dispatch(processingComplete())
            dispatch(triggerAlert("User deleted"))
        }else if (res.data === 'logged out') {
            dispatch(exitUser())
        }
    } catch {
    }
}