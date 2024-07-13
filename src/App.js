import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout  from "./Checkout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
          <Checkout/>
          </>
          }
        />

        <Route path="/" element={  <>
              <Header />
              <Home />
            </>} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
