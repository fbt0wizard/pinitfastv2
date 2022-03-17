import { useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, darkTheme } from "./utilities/Themes";
import GlobalStyle from "./utilities/GlobalStyle";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { SignIn } from "./pages/sign-in/SignIn";
import { SignUp } from "./pages/sign-up/SignUp";
import { Home } from "./pages/home/Home";
import { checkStatus } from "./redux/api/checkUser";

function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    checkStatus(dispatch);
  }, []);
  const options = {
    position: positions.TOP_CENTER,
    timeout: 4000,
    offset: "10px",
    transition: transitions.SCALE,
  };
  const { theme } = useSelector((state) => state.theme);
  const { userLoggedIn, noCookie } = useSelector((state) => state.auth);

  const redirection = () => {
    if (noCookie === "logged out") {
      return <SignIn />;
    }
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : LightTheme}>
      <GlobalStyle />
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={userLoggedIn ? <Dashboard /> : redirection()}
              ></Route>
              <Route
                path="/login"
                element={!userLoggedIn ? <SignIn /> : <Dashboard />}
              ></Route>
              <Route
                path="/registration"
                element={!userLoggedIn ? <SignUp /> : <Dashboard />}
              ></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
