// parent is ImageComponent jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doc from "../../images/doc.jpg";
import { triggerHeight } from "../../redux/slices/handleAutoHeight";
import { DisplayImageStyled, DocumentNameStyled, ImgStyledBox } from "./DisplayImage.style";

export const DisplayImage = ({ item, index, id, viewImage, getHeight }) => {
  const dispatch = useDispatch()

  const [ready, setReady] = useState(false);
  let extention = ["jpg", "png", "zip", "rar", "gif"];
  const myArray = item.split(".");
  let name = myArray[0];
  let ext = myArray[myArray.length - 1];

  return (
    <DisplayImageStyled>
      <ImgStyledBox
        // style={ready ? null : { height: "0px" }}
        src={
          extention.includes(ext.toLowerCase())
            ? "http://localhost:8080/backend/imguploads/" + item
            : doc
        }
        alt=""
        onClick={() => viewImage(index, id)}
        onLoad={() => {
          // setReady(true);
          getHeight();
          console.log('i am done loading')
          dispatch(triggerHeight())
        }}
       />
      <DocumentNameStyled>
        {!extention.includes(ext.toLowerCase())
          ? name.substring(0, 15) + " " + ext
          : null}
      </DocumentNameStyled>
    </DisplayImageStyled>
  );
};
