import React from "react";

import { Photo } from "@/@types/photos";
import Image from "next/image";

interface PhotosListProps {
  photos: Photo[];
}

const PhotosList: React.VFC<PhotosListProps> = ({ photos }) => {
  const stringToDate = (dateAsString: string) => new Date(dateAsString);

  const parseDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="grid grid-cols-1 gap-2">
      {photos.map(({ url, date, caption }) => (
        <div key={url} className="relative border-md">
          <Image
            src={url}
            alt={caption}
            className="object-cover rounded-md"
            layout="responsive"
            height="240"
            width="640"
          />
          <time
            className="absolute bottom-0 right-0 text-sm text-white -translate-x-4 -translate-y-2"
            dateTime={date}
          >
            {parseDate(stringToDate(date))}
          </time>
        </div>
      ))}
    </div>
  );
};

export default PhotosList;
