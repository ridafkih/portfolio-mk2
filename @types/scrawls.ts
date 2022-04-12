export interface Scrawl {
  text: string;
  date: string;
  emoji: string;
}

export interface ScrawlProperties {
  Scrawl: {
    type: "title";
    title: [
      {
        type: "text";
        text: {
          content: string;
          link: string | null;
        };
        plain_text: string;
        href: string | null;
      }
    ];
  };
  Date: {
    type: "date";
    date: {
      start: string;
      end: string | null;
      time_zone: string | null;
    };
  };
  Emoji: {
    type: "rich_text";
    rich_text: [
      {
        type: "text";
        text: {
          content: string;
          link: string | null;
        };
        plain_text: string;
        href: string | null;
      }
    ];
  };
}
