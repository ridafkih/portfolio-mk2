import React, { useEffect, useState } from "react";

import axios from "axios";
import { TwitterFollowerCountResponse } from "@/@types/twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TwitterCount = () => {
  const [followerCount, setFollowerCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get<TwitterFollowerCountResponse>("/api/twitter/followers")
      .then(({ data }) => setFollowerCount(data.count))
      .catch(() => void 0);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon size="lg" icon={faTwitter} />
      <span>{followerCount}</span>
    </div>
  );
};

export default TwitterCount;
