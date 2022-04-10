import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import { NotionBlock, NotionBlockComponent } from "@/@types/notion";

export const NotionCodeBlock: NotionBlockComponent<NotionBlock.CODE> = (
  props
) => {
  const codeBlockElement = useRef<HTMLElement>(null);
  const { language, rich_text } = props.code;

  useEffect(() => {
    if (!codeBlockElement.current) return;
    Prism.highlightElement(codeBlockElement.current);
  }, [codeBlockElement]);

  return (
    <pre
      className="rounded-md"
      style={{
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <code
        ref={codeBlockElement}
        className={`language-${language}`}
        style={{ fontSize: "0.9rem", tabSize: 2 }}
      >
        {rich_text[0].plain_text}
      </code>
    </pre>
  );
};

export default NotionCodeBlock;
