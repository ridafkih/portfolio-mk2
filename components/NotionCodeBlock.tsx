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
    <pre className="!my-8 rounded-md sm:!-mx-6 sm:!px-6">
      <code
        ref={codeBlockElement}
        className={`language-${language} !text-sm`}
        style={{ tabSize: 2 }}
      >
        {rich_text[0].plain_text}
      </code>
    </pre>
  );
};

export default NotionCodeBlock;
