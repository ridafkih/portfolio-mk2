export type BlogStatus = "Draft" | "Complete";

export interface BlogPost {
  id: string;
  cover: {
    url: string;
  };
  status: BlogStatus;
  created: string;
  title: string;
  description: string;
  url: string;
}

export interface BlogPostProperties {
  "Release Date": {
    id: string;
    type: "date";
    date: {
      start: Date;
      end: Date | null;
    };
  };
  Status: {
    id: string;
    type: "select";
    select: {
      id: string;
      name: "Draft" | "Complete";
      color: string;
    };
  };
  Name: {
    id: "title";
    type: "title";
    title: [
      {
        plain_text: string;
      }
    ];
  };
  Description: {
    id: string;
    type: "rich_text";
    rich_text: [
      {
        type: "text";
        plain_text: string;
      }
    ];
  };
}
