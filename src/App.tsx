import "./App.css";
import "./components/Commits";
import { Commits } from "./components/Commits";

function App() {
  return (
    <div>
      <header>
        <h2>Github Commit History</h2>
      </header>
      <main>
        <Commits />
      </main>
    </div>
  );
}

export default App;
