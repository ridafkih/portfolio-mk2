import axios from "axios";
import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

import GitHubData from "@/@types/GitHubData";

const GITHUB_USERNAME = "ridafkih";
const GITHUB_URL = "https://github.com/";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36";

const filterEmojis = (text?: string) => {
  if (!text) return text;
  return text.replace(/[^A-z0-9\.,:-\s]/g, "");
};

const sortByStars = (project: GitHubData, referenceProject: GitHubData) => {
  return referenceProject.stars - project.stars;
};

/**
 * Gets the pinned repository data relative to the repository title element.
 * @param document The document object of the GitHub page.
 * @param repoTitleElement The title element on the GitHub page.
 * @returns An object containing the repository data.
 */
const getPinnedRepositoryData = (repoTitleElement: Element): GitHubData => {
  const parentElement = repoTitleElement.closest(".Box");
  const descriptionElement = parentElement?.querySelector("p");
  const starElement = parentElement?.querySelector(".pinned-item-meta");

  const name = repoTitleElement.textContent || "Unknown Title";
  const stars = parseInt(starElement?.textContent || "0") || 0;
  const description =
    filterEmojis(descriptionElement?.textContent?.trim()) ||
    "Description Unavailable";

  return { name, description, stars };
};

/**
 * Gets the projecst from the provided username.
 * @param username The username of the user to fetch.
 * @returns An array of objects containing their pinned repository information.
 */
const getProjectsFromGitHub = async (
  username: string
): Promise<GitHubData[]> => {
  const githubPage = await axios
    .get(GITHUB_URL + username, {
      headers: { "User-Agent": USER_AGENT },
    })
    .then(({ data }) => data)
    .catch(() => undefined);

  const { document } = new JSDOM(githubPage).window;

  const repositoryTitleElements = Array.from(
    document.querySelectorAll(".repo")
  );

  return repositoryTitleElements.map(getPinnedRepositoryData).sort(sortByStars);
};

const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse<GitHubData[]>
) => {
  const projects = await getProjectsFromGitHub(GITHUB_USERNAME);
  response.json(projects);
};

export default handler;
