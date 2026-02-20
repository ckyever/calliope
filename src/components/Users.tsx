import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import ENVIRONMENT_VARIABLES from "../environmentVariables";

import type { AppContext } from "../types/outletContext.ts";
import type { User as UserInfo } from "../types/User.ts";

function Users() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const { token } = useOutletContext<AppContext>();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) return;
      try {
        const response = await fetch(
          `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/users`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [token]);

  return (
    <>
      <h2>Musers</h2>
      <ul>
        {users.map((userInfo) => (
          <li key={userInfo.id}>{userInfo.displayName}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;
