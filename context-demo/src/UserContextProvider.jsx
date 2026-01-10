import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  });

  const contextValue = { user, setUser };

  return <UserContext value={contextValue}>{children}</UserContext>;
};
