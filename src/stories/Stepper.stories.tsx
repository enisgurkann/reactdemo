import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Stepper, StepperItem, StepperProps, StepperRef } from '../components/stepper/Stepper';

const StepOne = ({ handleSubmit }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Step1</h3>
      <button onSubmit={handleSubmit}>Step2e gec</button>
    </form>
  );
};

const StepTwo = () => {
  return (
    <form>
      <h3>Step2</h3>
    </form>
  );
};

export default {
  title: 'Example/Stepper',
  component: Stepper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StepperProps> = (args) => {
  const stepperRef: React.MutableRefObject<StepperRef | null | undefined> = React.createRef();

  const handleSubmit = () => stepperRef.current?.goToNextStep();

  const STEPPER_ITEMS = [{ Component: <StepOne handleSubmit={handleSubmit}></StepOne> }, { Component: <StepTwo></StepTwo> }] as StepperItem[];

  return <Stepper ref={stepperRef} stepperItems={STEPPER_ITEMS} />;
};

export const BasicStepper = Template.bind({});
BasicStepper.args = {};
