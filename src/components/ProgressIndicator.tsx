import styled from "@emotion/styled";

interface IProgressIndicator {
  totalSteps: number;
  currentStep: number;
  onClick: (step: number) => void;
}

export const ProgressIndicator = ({totalSteps,currentStep,onClick}: IProgressIndicator) => {
  return (
    <ProgressWrapper>
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        return <ProgressDot key={step} isActive={currentStep === step} onClick={() => onClick?.(step)} />;
      })}
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

const ProgressDot = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? "#e87c74" : "#d9d9d9")};
  transition: all 0.3s ease;
  cursor: pointer;
`
