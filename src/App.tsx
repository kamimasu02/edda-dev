import { Routes, Route, Navigate } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Meta from "@components/Meta";

import MainPage from "@pages/MainPage";
import IntroductionPage from "@pages/IntroPage";

import "./App.css";
import "./font.css";

const App = () => {
  return (
    <div className="app">
      <Meta />
      <Header />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/intro" Component={IntroductionPage} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
