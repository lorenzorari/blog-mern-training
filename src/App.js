import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
