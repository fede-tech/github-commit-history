import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { convertDate } from "../helpers/utils.ts";
import { getCommits } from "../services/commits.ts";

const responseCommits = await getCommits();
export const Commits = () => {
  const commits = responseCommits.map((e: { commit: unknown }) => e.commit);
  const hasCommits = commits.length > 0;
  return hasCommits ? (
    <ul>
      {commits.map(
        (commit: {
          tree: { sha: Key | null | undefined };
          message:
            | string
            | number
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<unknown>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          author: {
            name:
              | string
              | number
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            date: string;
          };
        }) => (
          <div className="card" key={commit.tree.sha}>
            <h3>{commit.message}</h3>
            <p>by {commit.author.name}</p>
            <p>on {convertDate(commit?.author?.date)}</p>
          </div>
        )
      )}
    </ul>
  ) : (
    <p>No commits to show</p>
  );
};
