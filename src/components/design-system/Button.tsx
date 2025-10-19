import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  width: string;
  height: string;
  backgroundColor?: string;
  borderRadius: string;
  padding: string;
  onClick: () => void;
}

export const Button = ({
  children,
  width,
  height,
  backgroundColor = "gray",
  onClick,
  borderRadius,
  padding,
}: IButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Omit<IButtonProps, "onClick" | "children" >> `
  width: ${({width}) => width};
  height: ${({height}) => height};
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: ${({borderRadius}) => borderRadius};
  display: flex;
  padding: ${({padding}) => padding}
`
