// parent is ShowImage
import React from "react";
import doc from "../../images/doc.jpg";
import { ImageNameStyled, ImgStyled } from "./Img.style";

export const Img = ({ ext, extention, name, data }) => {
  return (
    <>
      <ImgStyled
        src={
          extention.includes(ext.toLowerCase())
            ? "http://localhost:8080/backend/imguploads/" + data
            : doc
        }
        alt=""
      />
      <ImageNameStyled
        details={
          !extention.includes(ext.toLowerCase())
            ? `width: max-content;
            margin: 4px auto;
            padding: 5px 17px;
            border-radius: 20px;`
            : null
        }
      >
        {!extention.includes(ext.toLowerCase())
          ? name.substring(0, 15) + " " + ext
          : null}
      </ImageNameStyled>
    </>
  );
};
