import React, { useContext } from "react";

import Context from "../../context";

const Header = () => {
  const { user, setUser, cometChat } = useContext(Context);

  const logout = async () => {
    const isLogout = window.confirm("Do you want to log out ?");
    if (isLogout) {
      await cometChat.logout();
      removeAuthedInfo();
      window.location.reload();
    }
  };

  const removeAuthedInfo = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  if (!user) return <React.Fragment></React.Fragment>;

  return (
    <div className="header">
      <div className="header__left">
        <span>Chat App</span>
        <img src={user.image} alt={user.fullname} />
        <span>Hello, {user.fullname}</span>
      </div>
      <div className="header__right">
        <div className="header__logout" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
