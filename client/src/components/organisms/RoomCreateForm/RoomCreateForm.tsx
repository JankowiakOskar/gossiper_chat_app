import React, { useState, useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeContext } from 'styled-components';
import * as yup from 'yup';
import { Color } from 'utils/types/enums';
import { ChatRoomPreview } from 'features/chatRooms/types';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/ButtonStyles';
import Stepper from 'react-stepper-horizontal';
import FormStep, { StepProps } from './FormStep/FormStep';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { WizardWrapper, Form, FormFooter } from './RoomCreateFormStyles';

const schemaOne = yup.object().shape({
  name: yup.string().required(`Don't leave blank name field`),
  description: yup.string().required(`Describe your chat room`),
});

const schemaTwo = yup.object().shape({
  tags: yup.array().of(yup.string()).min(1, 'Please, select at least one tag'),
});

const schemaThree = yup.object().shape({
  isPrivate: yup.bool(),
  password: yup.string().when('isPrivateRoom', {
    is: true,
    then: yup.string().required('Please add your room password'),
  }),
});

type Props = {
  children: React.ReactElement<StepProps>[];
};

const FormWizard = ({ children }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const allSteps = React.Children.toArray(children);
  const renderedStep = allSteps[activeStep];
  const isLastStep = activeStep === allSteps.length - 1;
  const isFirstStep = activeStep === 0;

  const themeContext = useContext(ThemeContext);

  const methods = useForm({
    resolver: yupResolver(React.Children.map(children, child => child.props.validationschema)[activeStep]),
    shouldUnregister: false,
  });

  const onSubmit = (data: ChatRoomPreview) => {
    if (isLastStep) {
      console.log(data);
    } else {
      setActiveStep(step => step + 1);
    }
  };

  return (
    <WizardWrapper>
      <Heading title='Room Create form' />
      <Stepper
        steps={React.Children.map(children, child => ({
          title: child.props.title,
        }))}
        activeStep={activeStep}
        completeOpacity='0.7'
        size={35}
        lineMarginOffset={20}
        activeColor={themeContext.colors.lightBlue}
        completeColor={themeContext.colors.lightBlue}
        completeBarColor={themeContext.colors.lightBlue}
      />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderedStep}
          <FormFooter>
            <Button
              type='button'
              color={Color.LightGreen}
              remWidth={10}
              disabled={isFirstStep}
              onClick={() => setActiveStep(step => step - 1)}
            >
              Back
            </Button>
            <Button type='submit' color={Color.LightGreen} remWidth={13}>
              {isLastStep ? 'Create Room' : 'Next Step'}
            </Button>
          </FormFooter>
        </Form>
      </FormProvider>
    </WizardWrapper>
  );
};

const RoomCreateForm = () => (
  <FormWizard>
    <FormStep title='Step one' validationschema={schemaOne}>
      <StepOne />
    </FormStep>
    <FormStep title='Step two' validationschema={schemaTwo}>
      <StepTwo />
    </FormStep>
    <FormStep title='Step three' validationschema={schemaThree}>
      <StepThree />
    </FormStep>
  </FormWizard>
);

export default RoomCreateForm;
