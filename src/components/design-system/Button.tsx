import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  width: string;
  height: string;
  backgroundColor?: string;
  borderRadius: string;
  onClick: () => void;
}

export const Button = ({
  children,
  width,
  height,
  backgroundColor = "gray",
  onClick,
  borderRadius,
}: IButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{
  width: string;
  height: string;
  backgroundColor: string;
  borderRadius: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
