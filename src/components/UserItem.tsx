import { useState } from "react";
import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext.ts";
import ENVIRONMENT_VARIABLES from "../environmentVariables";
import type { User as UserInfo } from "../types/User.ts";

import styles from "../styles/UserItem.module.css";

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
    <div className={styles["user-item"]}>
      <span>{userInfo.displayName}</span>
      {(currentUserId ?? 0) > 0 && (
        <button
          className={styles["follow-button"]}
          onClick={() => handleFollow(userInfo.id)}
        >
          {isCurrentUserFollowing ? "Unfollow" : "Follow"}
        </button>
      )}
    </div>
  );
}

export default UserItem;
