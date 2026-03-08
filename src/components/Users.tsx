import ENVIRONMENT_VARIABLES from "../environmentVariables";
import { useEffect, useState } from "react";
import type { User as UserInfo } from "../types/User.ts";

function Users() {
  const [users, setUsers] = useState<UserInfo[]>([]);

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
        {users.map((userInfo) => (
          <li key={userInfo.id}>{userInfo.displayName}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;
