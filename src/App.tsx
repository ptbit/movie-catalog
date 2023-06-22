import { Routes, Route } from "react-router-dom";
import { Movies } from "./pages/Movies/Movies";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home/Home";
import { Tv } from "./pages/Tv/Tv";
import { Error } from "./pages/Error/Error";
import { MoviePage } from "./pages/Movie/MoviePage";
import { SearchPage } from "./pages/Search/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MoviePage />}></Route>
        <Route path="search/:search" element={<SearchPage />}></Route>
        <Route path="tv" element={<Tv />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
