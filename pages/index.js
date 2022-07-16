import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Loading from "../components/common/Loading";

import Login from "../components/login/Login";

import Context from "../context";

const MainNoSSR = dynamic(() => import("../components/main/Main"), {
  ssr: false,
});

export default function Home({ posts }) {
  const [user, setUser] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [cometChat, setCometChat] = useState(null);

  useEffect(() => {
    initCometChat();
    initAuthUser();
  }, []);

  useEffect(() => {
    setHasLoaded(true);
  }, [user, cometChat]);

  const initCometChat = async () => {
    const { CometChat } = await import("@cometchat-pro/chat");
    const appID = `${process.env.NEXT_PUBLIC_COMETCHAT_APP_ID}`;
    const region = `${process.env.NEXT_PUBLIC_COMETCHAT_REGION}`;
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build();
    CometChat.init(appID, appSetting).then(
      () => {
        setCometChat(() => CometChat);
        window.CometChat = CometChat;
      },
      (error) => {}
    );
  };

  const initAuthUser = () => {
    const authenticatedUser = localStorage.getItem("auth");
    setUser(authenticatedUser ? JSON.parse(authenticatedUser) : null);
  };

  if (!hasLoaded || !cometChat) {
    return <Loading />;
  }

  if (!user) {
    return (
      <Context.Provider value={{ user, setUser, cometChat }}>
        <Login />
        <Loading />
      </Context.Provider>
    );
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        cometChat,
      }}
    >
      <div className="index">
        <Head>
          <title>Next.js Chat App</title>
        </Head>
        <MainNoSSR />
        <Loading />
      </div>
    </Context.Provider>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
