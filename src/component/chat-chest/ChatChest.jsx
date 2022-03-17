// parent is ChatData jsx
import React, { useState, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch } from "react-redux";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./chat-chest.css";
import { AiFillDelete } from "react-icons/ai";
import Modal from "react-modal";
import { BsFillReplyFill } from "react-icons/bs";
import Linkify from "react-linkify";
import { ShareAll } from "../share-all/ShareAll";
import { deleteAll } from "../../redux/api/deleteAll";
import { ModalStyled } from '../image-comp/ImageComponent.style';
import {
  DataWrapper,
  PStyled,
  ControlStyled,
  Time,
  Share,
  Delete,
  Sender,
} from "./ChatChest.style";

export const ChatChest = ({ item }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState("");

  const myNode = useRef(null);

  function closeModal() {
    setModal(false)
  }

  // function closeModal2() {
  //   setIsOpen2(false);
  // }
  // function openModal2() {
  //   setIsOpen2(true);
  // }
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
    <div className={!item.status ? "gradient-border" : ""} ref={myNode}>
      <DataWrapper
        key={item.id}
        switch={!item.status && 0}
        box={!item.status && "unset"}
      >
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          <PStyled>{item.value}</PStyled>
        </Linkify>
        <ControlStyled>
          <Time>{item.date}</Time>
          <Delete onClick={() => subDeleteMessage(item.id)}>
            <AiFillDelete /> Del
          </Delete>
          <Share onClick={() => setModal(true)}>
            <BsFillReplyFill /> Share
          </Share>
          <Sender>{item.sender.length > 0 ? "by " + item.sender : null}</Sender>
        </ControlStyled>
        {modal? <ModalStyled>
          <ShareAll setValue={setValue} messageId={item.id} close={closeModal}/>
        </ModalStyled> : null}
        {/* <Modal
          isOpen={modal2IsOpen}
          ariaHideApp={false}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal2}
          className="my-modal pop-modal"
        >
          <ShareAll setValue={setValue} messageId={item.id} />
        </Modal> */}
      </DataWrapper>
    </div>
  );
};
