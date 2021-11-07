import {useState, useCallback} from 'react'

type ToggleParams = {
  initialActive?: boolean
}


export const useToggle = ({initialActive = false}: ToggleParams) => {
  const [isActive, setActive] = useState(initialActive)

  const handleToggle = useCallback(() => setActive(prevState => !prevState), [])

  const handleClose = useCallback(() => setActive(false), [])

  return {
    isActive,
    handleToggle,
    handleClose
  }
}