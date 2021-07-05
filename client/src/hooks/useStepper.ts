import { useState } from 'react';

type Config = {
  defaultStep?: number;
};

export const useStepper = <T>(steps: T[], { defaultStep = 0 }: Config) => {
  const [activeStep, setActiveStep] = useState(defaultStep);
  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;
  const choosenStep = steps[activeStep];

  return { activeStep, setActiveStep, isLastStep, isFirstStep, choosenStep };
};
