import { css } from "@emotion/core";

export const button = css`
  height: 40px;
  width: 100px;
  font-size: 14px;
  background: transparent;
  transition: background 500ms ease;
  cursor: pointer;
  color: white;
  border: #61dafb 1px solid;
  border-radius: 5px;
  &:hover {
    background: #61dafb;
  }
`;
