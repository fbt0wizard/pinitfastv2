// parent is ImageComponent jsx
// parent is ChatChest jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsFillReplyFill } from "react-icons/bs";
import { shareAllFromDashboard } from "../../redux/api/shareSingleFile";
import { deleteFriendUser } from "../../redux/api/deleteUser";
import { fetchFriends } from "../../redux/api/getFriends";
import { CloseBtnStyled } from '../show-image/ShowImage.style';
import {
  CheckBoxStyled,
  InputLabelStyled,
  InputNameStyled,
  LabelStyled,
  SelectStyled,
  ShareAllStyled,
  UserButton,
  UserControlStyled,
} from "./ShareAll.styled";

export const ShareAll = ({ setValue, messageId, close }) => {
  const { friends, user } = useSelector((state) => state.allData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchFriends({ getFriends: user.friendId }, dispatch);
  }, []);

  const [newUser, setNewUser] = useState(false);
  const [targetUser, setTargetUser] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [recieverId, setRecieverId] = useState(null);
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => {
    if (e.value === 0) {
      setTargetUser("");
      setValue("");
      setNewUser(true);
      setRecieverId(null);
      setTyping(false);
    } else {
      setRecieverId(e.id);
      setSaveUser(false);
      setNewUser(false);
      setTargetUser(e.value);
      setValue(e.value);
      setTyping(true);
    }
  };
  const handleInput = (e) => {
    setTargetUser(e.target.value);
  };
  const handleSave = (e) => {
    setSaveUser(e.target.checked);
  };

  const action = (recieverId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete " + targetUser + "?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteFriendUser(
              {
                deleteUser: recieverId,
              },
              dispatch
            ),
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };
  return (
    <ShareAllStyled>
      <CloseBtnStyled onClick={close}>
      <AiOutlineCloseSquare />
      </CloseBtnStyled>
      <SelectStyled
        options={friends}
        onChange={handleChange}
        className="fancy"
      />
      {newUser ? (
        <InputLabelStyled htmlFor="save">
          <InputNameStyled
            type="text"
            name="username"
            autoComplete="off"
            autoCapitalize="off"
            onChange={handleInput}
            placeholder="Enter username"
          ></InputNameStyled>

          <LabelStyled htmlFor="save">
            save user
            <CheckBoxStyled type="checkbox" name="save" onClick={handleSave} />
          </LabelStyled>
        </InputLabelStyled>
      ) : null}
      <UserControlStyled>
        <UserButton onClick={() => action(recieverId)}>
          <AiFillDelete /> Delete user
        </UserButton>
        <UserButton
          onClick={() =>
            shareAllFromDashboard(
              {
                allShareId: messageId,
                reciever: targetUser,
                save: saveUser,
                sender: "fbt_wizard",
              },
              dispatch
            )
          }
        >
          <BsFillReplyFill /> Share
        </UserButton>
      </UserControlStyled>
    </ShareAllStyled>
  );
};
