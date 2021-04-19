import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 100%;
  left: 0;
  transform: translate(0, -100%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

export const Form = styled.form`
  padding: 0 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
