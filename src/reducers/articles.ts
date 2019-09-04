import React from 'react'

const initialState = { id: 0 as number }

type ActionType = {
  type: 'select'
}

export const articles = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'select':
      return { ...state }
    default:
      return state
  }
}
