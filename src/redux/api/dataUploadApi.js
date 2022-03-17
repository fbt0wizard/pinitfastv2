import { uploadStart, uploadComplete, uploadFailed, uploadingProgress } from "../slices/imageAndDocSlice";
import { getData } from "./fetchAllInfo";
import axios from "axios";
import { triggerAlert } from "../slices/alertSlice";

const UPLOAD_PATH = "http://localhost:8080/backend/upload.php";

export const addFiles = async (item, dispatch) => {
    dispatch(uploadStart())
    try {
        const res = await axios.request({
            method: "post", 
            url: `${UPLOAD_PATH}`, 
            data: item, 
            onUploadProgress: p => {
              const progress = p.loaded / p.total;
              dispatch(uploadingProgress(parseInt(progress * 100)))
            }
          })
        if(res.data === "success") {
            dispatch(uploadComplete())
            dispatch(triggerAlert('upload successful'))
            getData('fbt_wizard', dispatch)
        }
    } catch (err) {
        dispatch(uploadFailed())
    }
}