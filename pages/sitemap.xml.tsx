import { getBlogList } from "@/utils/blog";
import fs from "fs";
import { GetServerSideProps } from "next";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps<any> = async ({ res }) => {
  const { VERCEL_URL, VERCEL_ENV } = process.env;
  const protocol = VERCEL_ENV === "development" ? "http" : "https";

  const blogs = await getBlogList();

  const basePaths = [{ path: "", lastEdited: null }];
  const pagePaths = fs
    .readdirSync("pages")
    .map((path) => ({ path, lastEdited: null }));
  const blogPostPaths = blogs.map(({ url, lastEdited }) => ({
    path: url.substring(1),
    lastEdited,
  }));

  const staticPages = [...basePaths, ...pagePaths, ...blogPostPaths]
    .filter(({ path }) => {
      return ![
        "api",
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
        "index.tsx",
      ].includes(path);
    })
    .map(({ path, lastEdited }) => ({
      url: `${protocol}://${VERCEL_URL}/${path}`.replace(/\.tsx/g, ""),
      lastEdited,
    }));

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
