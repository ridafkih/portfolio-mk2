import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import WidthLimiter from "@/atoms/WidthLimiter";
import PageContainer from "@/atoms/PageContainer";
import Header from "@/components/Header";
import PhotosList from "@/components/PhotosList";

import { getPhotos } from "@/utils/photos";

import { Photo } from "@/@types/photos";

interface PhotosPageProps {
  photos: Photo[];
}

const PhotosPage: NextPage<PhotosPageProps> = ({ photos }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Photos</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <Heading type="h1">My Photos</Heading>
            <Paragraph weight="light">
              Get a glimpse into my daily life with one photo every day.
            </Paragraph>
          </div>
          <PhotosList photos={photos} />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const photos = await getPhotos();

  return {
    props: { photos },
    revalidate: 5 * 1000,
  };
};

export default PhotosPage;
