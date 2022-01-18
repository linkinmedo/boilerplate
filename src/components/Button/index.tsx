/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import * as styles from "./styles";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: String;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return (
    <button css={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
