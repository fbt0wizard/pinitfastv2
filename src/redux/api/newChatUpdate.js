import { instantChatUpdate } from "../slices/allDataSlice";
import { getData } from "./fetchAllInfo";
import axios from "axios";
import { triggerHeight } from "../slices/handleAutoHeight";
import { exitUser } from "../slices/authySlice";

const API_PATH = "http://localhost:8080/backend/test.php";

export const handleNewChat = async (data, dispatch, elem) => {
    if(data.content === '') {
        return false
    }
    elem.value = ''
    dispatch(instantChatUpdate(data.content))
    const prep = {
        newChat: data.content,
        user: data.user
    }
    try {
        const res = await axios.post(
            API_PATH,
            prep
        )
        if(res.data === 'logged out') {
            dispatch(exitUser())
        }else{
            getData(data.user, dispatch)
            dispatch(triggerHeight())
        }
    } catch (err) {

    }
}