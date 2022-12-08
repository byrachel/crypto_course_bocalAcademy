import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserAccount from "./pages/UserAccount";
import Posts from "./pages/Posts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserAccount />} />
      </Routes>
    </>
  );
}

export default App;
