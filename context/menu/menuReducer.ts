import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from '@/context/types'

const menuReducer = (state: any, action: any) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menuIsOpen: action.payload
      }
    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: action.payload
      }
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      }
    default:
      return state
  }
}

export default menuReducer
