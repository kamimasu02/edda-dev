import { Routes, Route, Navigate } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Meta from "@components/Meta";

import NotFoundPage from "@pages/not-found";
import MainPage from "@pages/main";

import "./App.css";
import "./font.css";

const App = () => {
  return (
    <div className="app">
      <Meta />
      <div className="header-wrapper">
        <Header>Header</Header>
      </div>
      <div className="page-wrapper">
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/404" Component={NotFoundPage} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      <div className="footer-wrapper">
        <Footer>Footer</Footer>
      </div>
    </div>
  );
};

export default App;
