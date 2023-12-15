import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";

console.log(import.meta.env.VITE_API_BASE_URL);

function App() {
  return (
    <BrowserRouter>
      <header>Header</header>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/details"} element={<MovieDetails />} />
        <Route path={"/*"} element={<Homepage />} />
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
