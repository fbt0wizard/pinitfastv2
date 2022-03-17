import React, { useState, useRef } from "react";
import { Navbar } from "../../component/navBar/Navbar";
import "./signUp.css";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import DangerousSharpIcon from '@mui/icons-material/DangerousSharp';
import { signUp } from "../../redux/api/authentication";

export const SignUp = () => {
  const dispatch = useDispatch()
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [correct, setCorect] = useState(false);

  const username = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleRegistration = (e) => {
    e.preventDefault();
    signUp({
      signupusername: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }, dispatch)
  };

  return (
    <div className="sign-up">
      <Navbar text={"Already a user"} btnTxt={"Sign in"} link={"/sign_in"} />
      <div className="login-wrapper">
        <div className="centered-div">
          <div className="logo-container">
            <img src={logo} alt="site logo" />
          </div>
          <div className="login">
            <div className="tittle">
              <h2>Sign up</h2>
            </div>
            <div className="validating">
              {correct ? (
                <CheckCircleOutlineSharpIcon className="correct" />
              ) : (
                <div className="waiting-to-validate">
                    <DangerousSharpIcon className="wrong"/>
                </div>
              )}
            </div>
            <form onSubmit={handleRegistration}>
              <div className="input-div">
                <input type="text" placeholder="Username" autoComplete="off" ref={username}/>
                <input type="email" placeholder="Email" autoComplete="off" />
                <input
                  type="email"
                  placeholder="Verify Email"
                  autoComplete="off"
                  ref={email}
                />
                <label htmlFor="" className="pass-view">
                  <input
                    type={view ? "text" : "password"}
                    placeholder="Password"
                  />
                  {view ? (
                    <VisibilityRoundedIcon
                      className="eye-icon"
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <VisibilityOffRoundedIcon
                      className="eye-icon"
                      onClick={() => setView(!view)}
                    />
                  )}
                </label>
                <label htmlFor="" className="pass-view">
                  <input
                    type={view2 ? "text" : "password"}
                    placeholder="Verify Password"
                    ref={password}
                  />
                  {view2 ? (
                    <VisibilityRoundedIcon
                      className="eye-icon"
                      onClick={() => setView2(!view2)}
                    />
                  ) : (
                    <VisibilityOffRoundedIcon
                      className="eye-icon"
                      onClick={() => setView2(!view2)}
                    />
                  )}
                </label>
              </div>
              <div className="enter-button">
                <div className="button" onClick={handleRegistration}>
                  <div className="real-button">Register</div>
                </div>
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
