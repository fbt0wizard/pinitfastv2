// parent is ShowImage
import React from "react";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { BackButtonStyled, ShareStyled } from "./Share.style";
import {
  SelectStyled,
  InputLabelStyled,
  InputNameStyled,
  LabelStyled,
  CheckBoxStyled,
} from "../share-all/ShareAll.styled";

export const Share = ({
  back,
  newUser,
  handleChange,
  handleSave,
  handleInput,
}) => {
  const { friends } = useSelector((state) => state.allData);

  return (
    <ShareStyled>
      <BackButtonStyled onClick={back}>
        <BiArrowBack /> back
      </BackButtonStyled>

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
    </ShareStyled>
  );
};
