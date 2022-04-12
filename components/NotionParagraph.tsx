import React from "react";

import Paragraph from "@/atoms/Paragraph";

import { NotionBlock, NotionBlockComponent } from "@/@types/notion";
import Link from "next/link";

const NotionParagraph: NotionBlockComponent<NotionBlock.PARAGRAPH> = (
  props
) => {
  const { rich_text } = props.paragraph;

  if (rich_text.length === 1)
    return <Paragraph weight="light">{rich_text[0].plain_text}</Paragraph>;

  return (
    <Paragraph weight="light">
      {rich_text.map(({ annotations, plain_text, href }, index) => {
        type AnnotationClassMap = { [P in keyof typeof annotations]?: string };
        const annotationClassMap: AnnotationClassMap = {
          code: "p-1 font-mono text-sm rounded-sm text-neutral-100 bg-neutral-800",
          bold: "font-semibold",
          italic: "italic",
        };

        const annotationEntries = Object.entries(annotations);

        const className = annotationEntries.reduce(
          (accumulator, [key, value]) => {
            const classValue =
              annotationClassMap[key as keyof AnnotationClassMap] || "";
            return accumulator + (value ? `${classValue} ` : "");
          },
          ""
        );

        return (
          <span key={index} className={className}>
            {!href ? (
              plain_text
            ) : (
              <Link href={href}>
                <a target="blog_out">{plain_text}</a>
              </Link>
            )}
          </span>
        );
      })}
    </Paragraph>
  );
};

export default NotionParagraph;
