import {useRef} from 'react'
import { useToggle } from 'hooks/useToggle'
import useOutsideClick from 'hooks/useOutsideClick'
import Picker, { IEmojiData } from 'emoji-picker-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Wrapper, StyledEmojiPickerWrapper} from './EmojiPickerStyled'

type EmojiPickerProps = {
  getEmoji: (emoji: IEmojiData) => void
}

const EmojiPicker = ({getEmoji}: EmojiPickerProps) => {
  const {isActive, handleToggle, handleClose } = useToggle({initialActive: false})

  const emojiPickerRef = useRef(null)

  const handleChooseEmoji = (event: React.SyntheticEvent, emojiObject: IEmojiData) => {
    getEmoji(emojiObject)
    handleToggle()
  }

  useOutsideClick(emojiPickerRef, handleClose)

  return (
    <Wrapper>
      <FontAwesomeIcon onClick={handleToggle} icon="smile"/>
      {isActive && <StyledEmojiPickerWrapper ref={emojiPickerRef}><Picker onEmojiClick={handleChooseEmoji}/></StyledEmojiPickerWrapper>}
    </Wrapper>
  )
}

EmojiPicker.displayName = 'Emoji Picker'


export default EmojiPicker