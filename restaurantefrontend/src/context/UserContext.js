import React from "react";
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) ?? null
  );
  const [session, setSession] = useState(
    window.localStorage.getItem("session") ?? false
  );

  const values = useMemo(
    () => ({
      user,
      session,
      setUser,
      setSession,
    }),
    [user, session]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserProvider;

UserProvider.protoTypes = {
  children: PropTypes.object,
};
