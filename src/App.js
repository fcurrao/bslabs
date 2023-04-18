import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "../src/Components/Footer/Footer.js";
import Details from "./Pages/Details.js";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<Details />} />
          <Route
            path="*"
            element={
              <>
                <Link to="/">
                  {" "}
                  <button className="btn btn-primary"> BACK </button>
                </Link>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "red",
                    backgroundColor: "white",
                    height: "600px",
                  }}
                >
                  ERROR 404 - PAGINA NO ENCONTRADA
                </h1>
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
