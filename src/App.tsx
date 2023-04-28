// import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="hero-img" src='https://image.tmdb.org/t/p/original/94TIUEhuwv8PhdIADEvSuwPljS5.jpg'></img>
    {/* <Routes> */}
      {/* <Route path="/" element={<Layout />}> */}
        {/* <Route index element={<Home />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="posts/:id" element={<PostDetails />}></Route>
        <Route path="todos" element={<Todos />}></Route>
        <Route path="users" element={<User />}></Route>
        <Route path="*" element={<Error />}></Route> */}
      {/* </Route> */}
      {/* </Routes> */}
      <Footer/>
  </>
  );
}

export default App;
