export interface TwitterApiFollowersResponse {
  data?: {
    id: string;
    name: string;
    username: string;
  }[];
  meta?: {
    result_count: number;
  };
}

export interface TwitterFollowerCountResponse {
  count: number;
}
