import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Movies } from "./components/movies/Movies";
import { Tv } from "./components/tv/Tv";

function App() {
  return (
    <>
      <Header />
      <img
        className="hero-img"
        src="https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg"></img>
      <Routes>
        <Route index path="/" element={<Main />}></Route>
        {/* <Route index element={<Home />}></Route> */}
        <Route path="movies" element={<Movies />}></Route>
        <Route path="tv" element={<Tv />}></Route>
        {/* <Route path="todos" element={<Todos />}></Route>
        <Route path="users" element={<User />}></Route>
        <Route path="*" element={<Error />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
