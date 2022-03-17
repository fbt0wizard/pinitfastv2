import styled from "styled-components";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export const ModalPopStyled = styled.div`
  position: relative;
  height: max-content;
  max-height: 65vh;
  overflow-x: scroll;
  width: 50%;
  padding: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: ${({ theme }) => theme.modalContentBg};
  @media (max-width: 743px) {
    height: max-content;
    width: 75%;
  }
  @media (max-width: 600px) {
    height: max-content;
    width: 90%;
  }
`;
export const TittleStyledCom = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.color};
  margin: 0.5rem 0;
`;

export const FormStyled = styled.form``;

export const ErrorStyled = styled.p`
  color: #d8000c;
  background-color: #ffbaba;
  text-align: center;
  font-size: 14px;
  margin: 4px 0;
  border-radius: 30px;
  font-weight: 600;
`;

export const FilePondStyled = styled(FilePond)`
.filepond--drop-label {
    background: ${({theme}) => theme.dashboardNavBackground} !important;
    border-radius: 12px !important;
    cursor: pointer;
    margin-bottom: 5px !important;
}
.filepond--credits {
    visibility: hidden;
}
.filepond--panel-root {
  background: ${({theme}) => theme.modalContentBg} !important;
}
.filepond--list {
  margin-top: 5px !important;
}
`;


export const UploadButtonStyled = styled.button`
  float: right;
  margin: 5px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  border: 2px solid ${({theme}) => theme.color};
`;
