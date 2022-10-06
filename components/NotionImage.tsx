import { NotionBlock, NotionBlockComponent } from '@/@types/notion';
import Image from 'next/image';

const NotionImage: NotionBlockComponent<NotionBlock.IMAGE> = ({ image }) => {
  if (image.type === "file") return <></>;
  return (
    <div className="w-full">
      <Image objectFit="cover" src={image.external.url} alt=""></Image>
    </div>
  )
};

export default NotionImage;