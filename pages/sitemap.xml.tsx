import { getBlogList } from "@/utils/blog";
import { GetServerSideProps } from "next";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req: { headers },
}) => {
  const { VERCEL_ENV, VERCEL_URL } = process.env;

  const host = VERCEL_ENV === "development" ? VERCEL_URL : headers.host;
  const protocol = VERCEL_ENV === "development" ? "http" : "https";

  const blogs = await getBlogList();

  const basePaths = [{ path: "", lastEdited: null }];
  const pagePaths = [
    { path: "photos", lastEdited: null },
    { path: "scrawls", lastEdited: null },
    { path: "blog", lastEdited: null },
  ];

  const blogPostPaths = blogs.map(({ url, lastEdited }) => ({
    path: url.substring(1),
    lastEdited,
  }));

  const staticPages = [...basePaths, ...pagePaths, ...blogPostPaths].map(
    ({ path, lastEdited }) => ({
      url: `${protocol}://${host}/${path}`.replace(/\.tsx/g, ""),
      lastEdited,
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(({ url, lastEdited }) => {
          return `
            <url>
              <loc>${url}</loc>
              ${
                lastEdited
                  ? `<lastmod>${new Date(lastEdited).toISOString()}</lastmod>`
                  : ""
              }
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
