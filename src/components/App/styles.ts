import { css, keyframes } from "@emotion/core";

export const App = css`
  text-align: center;
`;

const logoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const AppLogo = css`
  animation: ${logoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const AppHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
