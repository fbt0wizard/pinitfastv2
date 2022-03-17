// parent is ImageComponent jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { AiFillDelete } from "react-icons/ai";
import { BsFillReplyFill } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";
import { Img } from "../img/Img";
import { Share } from "../share/Share";
import { deleteSingle } from "../../redux/api/singleFileDelete";
import { shareSingleData } from "../../redux/api/shareSingleFile";
import { deleteFriendUser } from "../../redux/api/deleteUser";
import { fetchFriends } from "../../redux/api/getFriends";
import { ButtonContainerStyled, CloseBtnStyled, ContStyled, OptionButtonStyled, ShowImageStyled } from "./ShowImage.style";

export const ShowImage = ({ close, item, index }) => {
  const dispatch = useDispatch();

  const [screen, setScreen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [targetUser, setTargetUser] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    fetchFriends({ getFriends: 5 }, dispatch);
  }, []);

  let data = item.value[index];
  let extention = ["jpg", "png", "zip", "rar", "gif"];
  const myArray = data.split(".");
  let name = myArray[0];
  let ext = myArray[myArray.length - 1];

  const singleShare = (item) => {
    if (!screen) {
      setScreen(true);
    } else {
      shareSingleData(
        {
          reciever: targetUser,
          content: item,
          sender: "fbt_wizard",
          saveUser: saveUser,
        },
        dispatch
      );
    }
  };

  const manageDel = (item, index) => {
      deleteSingle(
        {
          id: item.id,
          index: index,
        },
        dispatch
      );
      close();
  };

  const handleChange = (e) => {
    if (e.value == 0) {
      setUserToDelete(null);
      setTargetUser("");
      setNewUser(true);
      setTyping(false);
    } else {
      setUserToDelete(e.id);
      setSaveUser(false);
      setNewUser(false);
      setTargetUser(e.value);
      setTyping(true);
    }
  };
  const handleInput = (e) => {
    setTargetUser(e.target.value);
  };
  const handleSave = (e) => {
    setSaveUser(e.target.checked);
  };

  const back = () => {
      setTyping(false)
      setTargetUser("")
    setScreen(false);
  };

  const action = (item, index) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => manageDel(item, index),
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };
  const userAction = (user) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete " + targetUser + "?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>  deleteFriendUser({deleteUser: user,},dispatch),
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

function subDeleteMessage(item, index, userToDelete, targetUser) {
    // check if user want to delete image or friends
    // if screen is true user wants to delete friend else user want to delete image
    if(screen) {
        if (typing) {
            userAction(userToDelete)
        }
    }else {
        action(item, index)
    }

}

  return (
    <ShowImageStyled>
      <CloseBtnStyled type="button" onClick={close}>
        <AiOutlineCloseSquare />
      </CloseBtnStyled>
      <ContStyled>
        {!screen ? (
          <Img name={name} ext={ext} extention={extention} data={data} />
        ) : (
          <Share
            back={back}
            handleSave={handleSave}
            handleChange={handleChange}
            newUser={newUser}
            handleInput={handleInput}
          />
        )}
        <ButtonContainerStyled>
          <OptionButtonStyled
            type="button"
            onClick={() =>
              subDeleteMessage(item, index, userToDelete, targetUser)
            }
          >
            <AiFillDelete /> delete
          </OptionButtonStyled>
          <OptionButtonStyled type="button">
            <ImDownload3 /> download
          </OptionButtonStyled>
          <OptionButtonStyled type="button" onClick={() => singleShare(item.value[index])}>
            <BsFillReplyFill /> share
          </OptionButtonStyled>
        </ButtonContainerStyled>
      </ContStyled>
    </ShowImageStyled>
  );
};
