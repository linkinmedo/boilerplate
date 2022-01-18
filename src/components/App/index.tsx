/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import * as styles from "./styles";
import Button from "../Button";

const App: React.FC = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div css={styles.App}>
      <header css={styles.AppHeader}>
        <img src={logo} css={styles.AppLogo} alt="logo" />
        <p>{t("welcome")}</p>
        <Button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
        >
          {t("lang")}
        </Button>
      </header>
    </div>
  );
};

export default App;
