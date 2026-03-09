import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext.ts";
import ENVIRONMENT_VARIABLES from "../environmentVariables";
import type { User as UserInfo } from "../types/User.ts";

function Users() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const { currentUserId } = useOutletContext<AppContext>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/users`,
        );
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h2>Musers</h2>
      <ul>
        {users.map((userInfo) => {
          if (userInfo.id != currentUserId)
            return <li key={userInfo.id}>{userInfo.displayName}</li>;
        })}
      </ul>
    </>
  );
}

export default Users;
