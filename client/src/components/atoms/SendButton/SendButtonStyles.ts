import styled from 'styled-components';
import { ReactComponent as SendIcon } from 'assets/svgs/send-icon.svg';

export const Button = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
`;

export const PaperPlaneIcon = styled(SendIcon)``;
