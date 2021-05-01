import styled from 'styled-components';
import { ReactComponent as SendIcon } from 'assets/svgs/send-icon.svg';
import Button from 'components/atoms/Button/ButtonStyles';

export const StyledSendButton = styled(Button)`
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
