import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { JwtPayload } from "src/api/loginService/types";
import {
  clearTokenFromStorage,
  getTokenFromStorage,
} from "@services/localStorage";

interface Props {
  children: ReactNode;
}

interface Values {
  user: JwtPayload | null;
  setUser: (user: JwtPayload) => void;
  logout: () => void;
}

const INITIAL_VALUE: Values = {
  user: null,
  setUser: () => {},
  logout: () => {},
};

const UserContext = createContext(INITIAL_VALUE);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const token = getTokenFromStorage();

  const logout = () => {
    clearTokenFromStorage();
    setUser(null);
  };

  useEffect(() => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      setUser(JSON.parse(userInStorage));
    }
  }, []);

  const value = useMemo(() => {
    if (token) {
      return {
        user: JSON.parse(localStorage.getItem("user")!),
        setUser,
        logout,
      };
    } else {
      return { user, setUser, logout };
    }
  }, [token, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
