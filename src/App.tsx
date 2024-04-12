import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Plate } from "./pages/Plate/Plate";
import { Robot } from "./pages/Robot/Robot";
import { Krest } from "./pages/Krest/Krest";
import { Tutan } from "./pages/Tutan/Tutan";
import { Anubis } from "./pages/Anubis/Anubis";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plate" element={<Plate />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/krest" element={<Krest />} />
          <Route path="/tutan" element={<Tutan />} />
          <Route path="/anubis" element={<Anubis />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
