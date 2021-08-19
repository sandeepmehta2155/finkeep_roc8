import { StrictMode } from "react";
import ReactDOM from "react-dom";

import reportWebVitals from './reportWebVitals';

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserAuthProvider } from "./Login-page/auth-context";

export { SideNav } from "./Side-Nav/side-nav";
export { Header } from "./Header/header";
export { RouteComponents } from "./Route-Components/route-components";
export { CreateNote } from "./Create-note/create-note";
export { LoginPage } from "./Login-page/login-page";
export { SignUpPage } from "./Login-page/signup-page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <UserAuthProvider>
        <App />
      </UserAuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
