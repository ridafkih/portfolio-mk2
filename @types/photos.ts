export interface Photo {
  url: string;
  caption: string;
  date: string;
  expiry: string;
}

export interface PhotoProperties {
  Image: {
    type: "files";
    files: [
      {
        name: string;
        type: "file";
        file: {
          url: string;
          expiry_time: string;
        };
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
  Caption: {
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
}
