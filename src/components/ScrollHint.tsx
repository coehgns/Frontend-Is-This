import styled from "@emotion/styled";
import { DownArrow } from "../ui/assets/DownArrow";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0%   { transform: translateY(0);    opacity: 1; }
  50%  { transform: translateY(8px);  opacity: 1;  }
  100% { transform: translateY(0);    opacity: 1; }
`;

export const ScrollHint = styled(DownArrow)`
  display: block;
  margin: 0 auto;
  animation: ${bounce} 2s ease-in-out infinite;
`;
