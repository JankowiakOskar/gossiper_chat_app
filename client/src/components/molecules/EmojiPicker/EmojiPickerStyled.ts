import styled from 'styled-components'

export const Wrapper = styled.div`

  svg[data-icon="smile"] {
    height: 3rem;
    width: 3rem;
    color: ${({theme}) => theme.colors.lightBlue};
    cursor: pointer;
  }
`


export const StyledEmojiPickerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10%, -105%);
`