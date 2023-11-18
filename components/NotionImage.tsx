/* eslint-disable @next/next/no-img-element */
import { NotionBlock, NotionBlockComponent } from '@/@types/notion';

const NotionImage: NotionBlockComponent<NotionBlock.IMAGE> = ({ image }) => {
  return (
    <div className="relative w-full py-4">
      <img 
        style={{maxWidth: '100%', height: 'auto'}}
        src={"file" in image ? image.file.url : image.external.url} 
        alt=""
      />
    </div>
  )
};

export default NotionImage;
