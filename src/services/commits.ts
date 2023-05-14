import { githubUser } from "../config/github";
import { githubRepo } from "../config/github";

export const getCommits = async () => {
  const apiUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/commits`;
  try {
    const response = await fetch(apiUrl);
    const commits = await response.json();
    return commits;
  } catch (e) {
    throw new Error("Error getting commits");
  }
};
