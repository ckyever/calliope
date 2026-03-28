import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext.ts";
import ENVIRONMENT_VARIABLES from "../environmentVariables";
import type { User as UserInfo } from "../types/User.ts";

import UserItem from "./UserItem.tsx";

import styles from "../styles/UserList.module.css";

function UserList() {
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
      <ul className={styles["user-list"]}>
        {users.map((userInfo) => {
          if (userInfo.id != currentUserId)
            return (
              <li className={styles["user-list-item"]} key={userInfo.id}>
                <UserItem userInfo={userInfo} />
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default UserList;
