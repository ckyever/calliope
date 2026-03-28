export interface User {
  id: number;
  username: string | null;
  displayName: string | null;
  followedBy: {
    id: number;
  }[];
}
