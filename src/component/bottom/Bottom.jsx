// parent is Dashboard jsx
import React, { useRef } from "react";
import { handleNewChat } from "../../redux/api/newChatUpdate";
import { handleLiveInput } from "../../redux/slices/allDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { ResizeObserver } from "resize-observer";
import { FcPlus } from "react-icons/fc";
import { BsFillPinFill } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";
import { GrDocumentText } from "react-icons/gr";
import { triggerHeight } from "../../redux/slices/handleAutoHeight";
import {
  BottomStyled,
  DocumentStyled,
  OpenModal,
  PictureStyled,
  SendButton,
  TextArea,
  UploadingStyled,
} from "./Bottom.style";

export const Bottom = ({ openModal, setInputHeight }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.allData);
  const inputDiv = useRef(null);
  const textarea = useRef(null);

  const manageFunctions = () => {
    dispatch(triggerHeight());
    dispatch(handleLiveInput(textarea.current.value));
    const ro = new ResizeObserver(() =>
      setInputHeight(inputDiv.current.offsetHeight)
    );
    ro.observe(inputDiv.current);
  };

  return (
    <BottomStyled ref={inputDiv}>
      <UploadingStyled>
        <PictureStyled>
          <ImFilePicture />
        </PictureStyled>
        <DocumentStyled>
          <GrDocumentText />
        </DocumentStyled>
      </UploadingStyled>
      <OpenModal onClick={openModal}>
        <FcPlus />
      </OpenModal>
      <TextArea
        maxRows="3"
        minRows="1.3"
        onChange={() => manageFunctions()}
        ref={textarea}
      ></TextArea>
      <SendButton
        onClick={() =>
          handleNewChat(
            {
              content: textarea.current.value,
              user: user.userName,
            },
            dispatch,
            textarea.current
          )
        }
      >
        <BsFillPinFill />
      </SendButton>
    </BottomStyled>
  );
};
