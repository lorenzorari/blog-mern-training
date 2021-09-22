import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ArticlesPage from "./pages/articles";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesPage} />
    </BrowserRouter>
  );
}

export default App;
