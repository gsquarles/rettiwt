import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const UsersContext = createContext();

export function RootLayout() {
  const [users, setUsers] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [myProfile, setMyProfile] = useState(null);
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        isSignedIn,
        setIsSignedIn,
        myProfile,
        setMyProfile,
      }}
    >
      <Outlet />
    </UsersContext.Provider>
  );
}
