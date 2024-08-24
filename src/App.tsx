import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBarComponent from "./components/AppBar/AppBar.component";
import FooterComponent from "./components/Footer/Footer.component";
import HomeComponent from "./pages/Home/Home.component";
import PageNotFoundComponent from "./pages/PageNotFound/PageNotFound.component";
import "./App.scss";
import LoginComponent from "./pages/Login/LoginComponent";

const App = () => {
  return (
    <>
      <AppBarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="*" element={<PageNotFoundComponent />} />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
};

export default App;
