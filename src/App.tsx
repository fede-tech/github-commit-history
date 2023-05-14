import "./App.css";
import responseCommits from "./mocks/responseSuccess.json";

const convertDate = (utcDate: string) => {
  const date = new Date(utcDate).toString();
  return date;
};

function App() {
  const commits = responseCommits.map((e) => e.commit);
  const hasCommits = commits.length > 0;
  console.log(commits);
  return (
    <>
      <main>
        {hasCommits ? (
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
        )}
      </main>
    </>
  );
}

export default App;
