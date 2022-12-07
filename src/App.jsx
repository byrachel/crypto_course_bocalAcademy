import Header from "./components/header/Header";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
