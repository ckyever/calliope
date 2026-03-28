import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext.ts";
import ENVIRONMENT_VARIABLES from "../environmentVariables";
import type { User as UserInfo } from "../types/User.ts";

interface UserItemProps {
  userInfo: UserInfo;
}

function UserItem({ userInfo }: UserItemProps) {
  const { token, currentUserId } = useOutletContext<AppContext>();
  const [isCurrentUserFollowing, setIsCurrentUserFollowing] = useState(
    userInfo.followedBy.some((user) => user.id == currentUserId),
  );

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
    <div>
      <span>{userInfo.displayName}</span>
      {userInfo.followedBy.some((user) => user.id == currentUserId) ? (
        currentUserId ? (
          <button>Unfollow</button>
        ) : undefined
      ) : currentUserId ? (
        <button onClick={() => handleFollow(userInfo.id)}>Follow</button>
      ) : undefined}
    </div>
  );
}

export default UserItem;
