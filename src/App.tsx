import { Routes, Route } from "react-router-dom";
import { Movies } from "./pages/Movie/Movies";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home/Home";
import { Tv } from "./pages/Tv/Tv";
import { Error } from "./pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="tv" element={<Tv />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Route>
    </Routes>
  );
}

export default App;
