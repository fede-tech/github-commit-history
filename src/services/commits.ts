export const getCommits = async () => {
  const apiUrl = `https://api.github.com/repos/fede-tech/github-commit-history/commits`;
  try {
    const response = await fetch(apiUrl);
    const commits = await response.json();
    return commits;
  } catch (e) {
    throw new Error("Error getting commits");
  }
};
