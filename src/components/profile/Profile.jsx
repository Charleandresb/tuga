import React from "react";
import { CircleUserRound, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile({ currentUser, setCurrentUser, setLoggedIn }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="profile">
      <CircleUserRound className="profile__acount" />
      <h2 className="profile__name">{currentUser.name}</h2>
      <h3 className="profile__lastnames">{currentUser.lastname}</h3>
      <p className="profile__email">{currentUser.email}</p>
      <LogOut className="profile__logout" onClick={logout} />
    </div>
  );
}
