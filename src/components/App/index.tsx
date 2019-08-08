import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("welcome")}</p>
      </header>
    </div>
  );
};

export default App;
