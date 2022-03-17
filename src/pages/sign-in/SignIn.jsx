import React, { useState, useRef } from "react";
import "./signIn.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar } from "../../component/navBar/Navbar";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { signIn } from "../../redux/api/authentication";
import DangerousSharpIcon from '@mui/icons-material/DangerousSharp';

export const SignIn = () => {
  const [view, setView] = useState(false);

  const { displayErr, err } = useSelector((state) => state.auth)
  

  const dispatch = useDispatch()

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({
      loginUsername: username.current.value,
      password: password.current.value
    }, dispatch)
  };
  return (
    <>
      <Navbar text={"New User?"} btnTxt={"Sign up"} link={"/sign_up"} />
      <div className="login-wrapper">
        <div className="centered-div">
          <div className="logo-container">
            <img src={logo} alt="site logo" />
          </div>
          <div className="login">
            <div className="tittle">
              <h2>Sign in</h2>
            </div>
            <div className="validating">
              {displayErr? <div className="wrap"><DangerousSharpIcon className="wrong" /> <p>{err}</p></div>: null}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-div">
                <input type="text" placeholder="Username" ref={username}/>
                <label htmlFor="" className="pass-view">
                  <input type={view? 'text' : 'password'} placeholder="Password" ref={password}/>
                  {view ? (
                    <VisibilityRoundedIcon className="eye-icon" onClick={() => setView(!view)}/>
                  ) : (
                    <VisibilityOffRoundedIcon className="eye-icon" onClick={() => setView(!view)}/>
                  )}
                </label>
              </div>
              <div className="forget-pass">
                <p>
                  Forget password? <Link to="/">click here</Link>
                </p>
              </div>
              <div className="enter-button">
                <div className="button" onClick={handleSubmit}>
                  <div className="real-button">Login</div>
                </div>
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
