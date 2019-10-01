import React, { createContext, useState, useMemo, useContext } from 'react'
import { userdataType } from '../../domains/users'

export const RootContext = createContext<{
  isAuthenticated: boolean
  setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  isUserdata: userdataType
  setUserdata: React.Dispatch<React.SetStateAction<userdataType>>
} | null>(null)

/**
 * RootContext の Props
 */
type Props = {
  children: React.ReactNode
}

/**
 * RootContext の null の可能性を消す Hook
 */
export const useRootContext = () => {
  const state = useContext(RootContext)
  if (state === null) {
    throw new Error("Don't use useRootContent outside a RootProvider")
  }
  return state
}

/**
 * 一番外の Provider
 * Login 済みかどうかの情報を保持する
 */
export const RootProvider = ({ children }: Props) => {
  const [isAuthenticated, setAuthenticate] = useState<boolean>(false)
  const [isUserdata, setUserdata] = useState<userdataType>({
    name: '',
    profile: '',
    favorite: []
  })
  const value = useMemo(
    () => ({ isAuthenticated, setAuthenticate, isUserdata, setUserdata }),
    [isAuthenticated, isUserdata]
  )
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}
