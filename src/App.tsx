import useImagePreloader from "./hooks/useImagePreLoader";
import Letter from "./Letter/Letter";

function App() {
  useImagePreloader();

  return <Letter />;
}

export default App;
