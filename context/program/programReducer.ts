import { SET_PROGRAM } from '@/context/types'

const programReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_PROGRAM:
      return {
        ...state,
        program: action.payload
      }
    default:
      return state
  }
}

export default programReducer
