import React, { ForwardedRef, ReactElement, useImperativeHandle, useState } from 'react';

export type StepperItem = {
  Component: ReactElement<unknown, never> | null;
};

export interface StepperProps {
  stepperItems: Array<StepperItem>;
  initialStep?: number;
}

export interface StepperRef {
  goToNextStep(): void;
  goToPreviousStep(): void;
  goToStep(index: number): void;
}

export const Stepper = React.forwardRef(({ stepperItems, initialStep = 0 }: StepperProps, ref: ForwardedRef<StepperRef | undefined>) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  useImperativeHandle(ref, () => ({
    goToNextStep: () => {
      setActiveStep(activeStep + 1);
    },
    goToPreviousStep: () => {
      setActiveStep(activeStep - 1);
    },
    goToStep: (index) => {
      setActiveStep(index);
    },
  }));

  return <>{stepperItems.map((StepperItem, index) => (activeStep === index ? <React.Fragment key="stepperItem">{StepperItem.Component}</React.Fragment> : null))}</>;
});
