import axios from "axios";
import { setFriends } from "../slices/allDataSlice";
import { exitUser } from "../slices/authySlice";

const API_PATH = "http://localhost:8080/backend/test.php";


export const fetchFriends = async (id, dispatch) => {
    try {
        const res = await axios.post(API_PATH, id)
        if(res.data === 'logged out') {
            dispatch(exitUser())
          }else{
            dispatch(setFriends(res.data))
          }
    } catch (err) {

    }
}