import {
  OPEN_FIELDS_TOOLTIP,
  CLOSE_FIELDS_TOOLTIP,
  TOGGLE_FIELDS_TOOLTIP
} from '@/context/types'

const fieldsTooltipReducer = (state: any, action: any) => {
  switch (action.type) {
    case OPEN_FIELDS_TOOLTIP:
      return {
        ...state,
        fieldsTooltipIsOpen: action.payload
      }
    case CLOSE_FIELDS_TOOLTIP:
      return {
        ...state,
        fieldsTooltipIsOpen: action.payload
      }
    case TOGGLE_FIELDS_TOOLTIP:
      return {
        ...state,
        fieldsTooltipIsOpen: !state.fieldsTooltipIsOpen
      }
    default:
      return state
  }
}

export default fieldsTooltipReducer
