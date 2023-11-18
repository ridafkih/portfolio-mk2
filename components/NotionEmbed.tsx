import { NotionBlock, NotionBlockComponent } from "@/@types/notion";
import React from "react";
import { Tweet, Timeline } from "react-twitter-widgets";

export const NotionEmbed: NotionBlockComponent<NotionBlock.EMBED> = (props) => {
  const segments = props.embed.url.split("/");
  const isTweet = segments[2].includes("x.com") || segments[2].includes("twitter.com");
  console.log({ props, isTweet })
  
  if (isTweet) return (
    <div className="justify-center w-full">
      <Tweet tweetId={segments[segments.length - 1].split("?")[0]} options={{ theme: 'dark', align:'center', conversation: 'none', cards: 'hidden' }} />
    </div>
  )

  return null
}

export default NotionEmbed;
