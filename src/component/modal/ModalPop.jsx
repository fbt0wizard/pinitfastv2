// parent is Dashboard jsx
import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addFiles } from "../../redux/api/dataUploadApi";
import * as uuid from "uuid";
import { CloseBtnStyled } from "../show-image/ShowImage.style";
import {
  ErrorStyled,
  FilePondStyled,
  FormStyled,
  ModalPopStyled,
  TittleStyledCom,
  UploadButtonStyled,
} from "./ModalPop.style";

export const ModalPop = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    let test = [];
    let errorMsg = [];
    for (let i = 0; i < files.length; i++) {
      let ext = files[i].fileExtension;
      let extention = ["jpg", "png", "zip", "rar", "doc", "gif", "pdf"];
      if (extention.includes(ext.toLowerCase())) {
        test.push(files[i].file);
      } else {
        errorMsg.push(files[i].filename + " is not supported");
      }
    }
    if (errorMsg.length == 0) {
      for (let i = 0; i < test.length; i++) {
        form_data.append("files[]", test[i]);
      }
      form_data.append("user", "fbt_wizard");
      addFiles(form_data, dispatch);
      closeModal();
    } else {
      setError(errorMsg);
    }
  };

  return (
    <ModalPopStyled>
      <CloseBtnStyled onClick={closeModal}>
        <AiOutlineCloseSquare />
      </CloseBtnStyled>
      <TittleStyledCom>Upload images or document</TittleStyledCom>
      <FormStyled>
        {error.map((txt) => (
          <ErrorStyled key={uuid.v4()}>{txt}</ErrorStyled>
        ))}
        <FilePondStyled
          iles={files}
          onupdatefiles={(items) => {
            setFiles(items);
          }}
          allowMultiple={true}
          maxFiles={3}
          instantUpload={false}
          name="files"
          acceptedFileTypes={["image/jpg", "video/mp4"]}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        ></FilePondStyled>
        <UploadButtonStyled type="submut" onClick={handleSubmit}>
          Upload now
        </UploadButtonStyled>
      </FormStyled>
    </ModalPopStyled>
  );
};
