// parent is ChatData jsx
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { ShowImage } from "../show-image/ShowImage";
import { AiFillDelete } from "react-icons/ai";
import { BsFillReplyFill } from "react-icons/bs";
import { DisplayImage } from "../image-display/DisplayImage";
import { ShareAll } from "../share-all/ShareAll";
import { deleteAll } from "../../redux/api/deleteAll";
import {
  DataWrapper,
  ControlStyled,
  Time,
  Share,
  Delete,
  Sender,
} from "../chat-chest/ChatChest.style.js";
import { ImageCol, ModalStyled } from "./ImageComponent.style.js";

export const ImageComponent = ({ item, openModal, getHeight }) => {
  const dispatch = useDispatch();
  // console.log(openModal)

  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [modal2IsOpen, setIsOpen2] = useState(false);
  const [index, setIndex] = useState(null);
  const [value, setValue] = useState("");

  const theNode = useRef(null);

  function loadImage(item, id) {
    let myEl = [];
    for (var i = 0; i < item.length; i++) {
      myEl.push(
        <DisplayImage
          key={i}
          item={item[i]}
          index={i}
          id={id}
          viewImage={viewImage}
          getHeight={getHeight}
        />
      );
    }
    return myEl;
  }
  // modal for viewing image
  const open = () => {
    setModalOne(true);
  };
  const close = () => {
    setModalOne(false);
  };

  // modal for sharing
  const openShare = () => {
    setModalTwo(true);
  };

  const closeShare = () => {
    setModalTwo(false);
  };

  const viewImage = (x, i) => {
    setIndex(x);
    open();
  };
  const action = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteAll(id, dispatch),
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  function subDeleteMessage(id) {
    action(id);
  }

  return (
    <DataWrapper
      key={item.id}
      ref={theNode}
      additional={`padding: 1px 3px 6px 3px !important;
    border-radius: 7px !important;
    margin-left: 16px !important;`}
    >
      <ImageCol>{loadImage(item.value, item.id)}</ImageCol>
      <ControlStyled>
        <Time>{item.date}</Time>
        <Delete onClick={() => subDeleteMessage(item.id)}>
          <AiFillDelete /> Del
        </Delete>
        <Share onClick={openShare}>
          <BsFillReplyFill /> Share
        </Share>
        <Sender>{item.sender.length > 0 ? "by " + item.sender : null}</Sender>
      </ControlStyled>
      {modalOne ? (
        <ModalStyled>
          <ShowImage close={close} item={item} index={index} />
        </ModalStyled>
      ) : null}
      {modalTwo ? (
        <ModalStyled>
          <ShareAll
            setValue={setValue}
            messageId={item.id}
            close={closeShare}
          />
        </ModalStyled>
      ) : null}
    </DataWrapper>
  );
};
