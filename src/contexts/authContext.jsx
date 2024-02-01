import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState([
    {
      user_id: 0,
    },
  ]);
  const auth = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
