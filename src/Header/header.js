import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login-page/auth-context";

export const Header = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("username")) || {
    username: null
  };

  const { LogOut } = useAuth();

  function LoginHandler() {
    if (username) LogOut();
  }

  return (
    <>
      <svg
        focusable="false"
        className="options"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
      <img
        className="keepImg"
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt=""
        aria-hidden="true"
      />
      <h1 className="appName" onClick={() => navigate("/")}>
        FinKeep
      </h1>
      <span className="darkModeSwitch" role="img" aria-labelledby="moon">
        🌙
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi-person"
        viewBox="0 0 16 16"
        onClick={() => navigate("/login")}
      >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
      </svg>
      <small className="loginRoute" onClick={() => LoginHandler()}>
        {username ? "Logout" : "Login"}
      </small>
      <div className="hrLine"></div>
    </>
  );
};
