import responseCommits from "../mocks/responseSuccess.json";
import { convertDate } from "../helpers/utils.ts";

export const Commits = () => {
  const commits = responseCommits.map((e) => e.commit);
  const hasCommits = commits.length > 0;
  return hasCommits ? (
    <ul>
      {commits.map((commit) => (
        <li key={commit.tree.sha}>
          <h3>{commit.message}</h3>
          <p>by {commit.author.name}</p>
          <p>on {convertDate(commit?.author?.date)}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No commits to show</p>
  );
};
