import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

const Tv = lazy(() => import("./pages/Tv/Tv"));
const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/Error/Error"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MoviePage = lazy(() => import("./pages/Movie/MoviePage"));
const SearchPage = lazy(() => import("./pages/Search/SearchPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movie-catalog/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MoviePage />}></Route>
          <Route path="search/:search" element={<SearchPage />}></Route>
          <Route path="tv" element={<Tv />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
