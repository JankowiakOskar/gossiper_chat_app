import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import Button from 'components/atoms/Button/ButtonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledForm = styled.form`
  padding: 0 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const StyledFieldWrapper = styled.div`
  margin-top: 3rem;
  position: relative;
`;

export const StyledButton = styled(Button)`
  margin: 2rem 0;
`

export const StyledInputField = styled(InputField)`
  input {
    max-width: 26rem;
    padding: 0 5rem 0 1rem;
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 60%;
  right: 10%;
  cursor: pointer;
`
