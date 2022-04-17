import {
  TwitterApiFollowersResponse,
  TwitterFollowerCountResponse,
} from "@/@types/twitter";
import axios from "axios";

interface GetTwitterFollowerCountProps {
  id: string;
  auth: string;
}

/**
 * Uses the Twitter API to get the follower count of the provided user.
 * @param props.id The ID of the user.
 * @param props.auth The Bearer Auth token for the Twitter API request.
 * @returns If it exists, the follower count, otherwise the value is set to 0.
 */
export const getTwitterFollowerCount = async ({
  id,
  auth,
}: GetTwitterFollowerCountProps): Promise<TwitterFollowerCountResponse> => {
  const { data } = await axios.get<TwitterApiFollowersResponse>(
    `https://api.twitter.com/2/users/${id}/followers`,
    {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }
  );

  const { meta } = data;
  return { count: meta?.result_count || 0 };
};
