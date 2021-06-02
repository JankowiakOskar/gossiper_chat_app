import React from 'react';
import { AnyObjectSchema } from 'yup';

export type StepProps = {
  children: React.ReactNode;
  title: string;
  validationschema: AnyObjectSchema;
};

const FormStep = ({ children, ...props }: StepProps) => <>{children}</>;

export default FormStep;
