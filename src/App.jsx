import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
