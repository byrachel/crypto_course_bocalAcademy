import Header from "./components/header/Header";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserAccount />} />
      </Routes>
    </>
  );
}

export default App;
