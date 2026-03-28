import { useState } from "react";
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
          method: isCurrentUserFollowing ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `Unable to ${isCurrentUserFollowing ? "unfollow" : "follow"} the user "${userInfo.username}"`,
        );
      }

      setIsCurrentUserFollowing((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <span>{userInfo.displayName}</span>
      <button onClick={() => handleFollow(userInfo.id)}>
        {isCurrentUserFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default UserItem;
