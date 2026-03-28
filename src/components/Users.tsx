import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext.ts";
import ENVIRONMENT_VARIABLES from "../environmentVariables";
import type { User as UserInfo } from "../types/User.ts";

function Users() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const { token, currentUserId } = useOutletContext<AppContext>();

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

  const handleFollow = async (userIdToFollow: number) => {
    try {
      const response = await fetch(
        `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/users/follow/${userIdToFollow}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Musers</h2>
      <ul>
        {users.map((userInfo) => {
          if (userInfo.id != currentUserId)
            return (
              <li key={userInfo.id}>
                <div>
                  <span>{userInfo.displayName}</span>
                  {userInfo.followedBy.some(
                    (user) => user.id == currentUserId,
                  ) ? (
                    currentUserId ? (
                      <button>Unfollow</button>
                    ) : undefined
                  ) : currentUserId ? (
                    <button onClick={() => handleFollow(userInfo.id)}>
                      Follow
                    </button>
                  ) : undefined}
                </div>
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default Users;
