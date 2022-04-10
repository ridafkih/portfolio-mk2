import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

type TypeWithGeneric<T> = T[];
type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : never;

export type NotionBlockType = NotionBlock["type"];

export type NotionBlock<T = string> = Extract<
  ExtractGeneric<ListBlockChildrenResponse["results"]>,
  { type: T }
>;

export type NotionBlockList<T = string> = NotionBlock<T>[];

export type NotionBlockComponent<T, P = {}> = React.VFC<NotionBlock<T> & P>;

export type NotionBlockRendererProps = {
  [K in NotionBlockType]?: React.VFC<NotionBlock<K>>;
};
