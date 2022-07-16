import React, { useContext } from "react";

import { CometChatUI } from "../../pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src";

import Header from "../common/Header";

import Context from "../../context";

const Main = () => {
  const { cometChat, user } = useContext(Context);

  if (!cometChat || !user) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <Header />
      <div className="chat">
        <CometChatUI />
      </div>
    </React.Fragment>
  );
};

export default Main;
