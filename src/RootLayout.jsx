import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import flowerIcon from "./assets/flowerIcon.png";

export const UsersContext = createContext();

export function RootLayout() {
  const [users, setUsers] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [myProfile, setMyProfile] = useState(null);
  const [showTweetForm, setShowTweetForm] = useState(false);
  const [tweets, setTweets] = useState([
    {
      avatarSrc: flowerIcon,
      username: "Griffin",
      atName: "BobbyJones",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      replies: 0,
      retweets: 2,
      likes: 3,
    },
  ]);
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        isSignedIn,
        setIsSignedIn,
        myProfile,
        setMyProfile,
        showTweetForm,
        setShowTweetForm,
        tweets,
        setTweets,
      }}
    >
      <Outlet />
    </UsersContext.Provider>
  );
}
