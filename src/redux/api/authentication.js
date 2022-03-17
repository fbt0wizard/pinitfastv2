import axios from "axios";
import { authSucess, incorrectDetails, resetErr, unverifiedUser } from "../slices/authySlice";

export const signIn = async (data, dispatch) => {
    dispatch(resetErr())

    try {
        const res = await axios.post('authy.php', data);
        if(res.data === "unverified") {
            dispatch(unverifiedUser())
        }else if (res.data === 'incorrect username/password') {
            dispatch(incorrectDetails())
        }else if (res.data === 'logged') {
            dispatch(authSucess())
        }
    } catch (err) {

    }
}

export const signUp = async (data, dispatch) => {
    console.log(data)
    try {
        const res = await axios.post('authy.php', data)
        console.log(res)
    } catch (err) {

    }
}