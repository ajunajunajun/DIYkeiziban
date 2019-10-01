import React from 'react'
import { useRootContext } from '../../../store/context/RootContext'

/**
 * myプロフィールを表示するページ
 */
export default function MyProfilePage() {
  const { isUserdata } = useRootContext()
  return (
    <div className="l-inner">
      <h1>MyProfilePage</h1>
      <h2>{isUserdata.name}</h2>
      <p>{isUserdata.profile}</p>
    </div>
  )
}
