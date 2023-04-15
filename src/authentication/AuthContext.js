import { useState } from "react";
import { createContext } from "react";
import { Role } from "./Role";

export const AuthContext = createContext({
  authenticated: false,
  currentUser: null,
  users: [
    {
      id: 1,
      firstName: "Fisayo",
      lastName: "Takuro",
      userName: "Fissy",
      password: "fissy0",
      role: Role.Manager,
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      userName: "Johnny",
      password: "johny7",
      role: Role.Admin,
    },
    {
      id: 3,
      firstName: "Isag",
      lastName: "Zainab",
      userName: "Zainny",
      password: "zainy0",
      role: Role.Developer,
    },
  ],
  tickets: [],
});

export function AuthProvider(props) {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Fisayo",
      lastName: "Takuro",
      userName: "Fissy",
      password: "fissy0",
      role: Role.Manager,
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      userName: "Johnny",
      password: "johny7",
      role: Role.Admin,
    },
    {
      id: 3,
      firstName: "Isag",
      lastName: "Zainab",
      userName: "Zainny",
      password: "zainy0",
      role: Role.Developer,
    },
  ]);
  const [auth, setAuth] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        users: users,
        isAuthenticated: auth,
        tickets: tickets,
        currentUser: currentUser,
        setAuth: setAuth,
        setUsers: setUsers,
        setTickets: setTickets,
        setCurrentUser: setCurrentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
