import React, { createContext, useState, useMemo, useContext } from 'react'

type state = number

export const ArticlesContext = createContext<{
  state: number
  setState: React.Dispatch<React.SetStateAction<state>>
} | null>(null)

type Props = {
  children: React.ReactNode
}

export const useArticlesContent = () => {
  const state = useContext(ArticlesContext)
  if (state === null) {
    throw new Error("Don't use useArticlesContent outside a ArticlesProvider")
  }
  return state
}

export const ArticlesProvider = ({ children }: Props) => {
  const [state, setState] = useState(-1)
  const value = useMemo(() => ({ state, setState }), [state])
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
