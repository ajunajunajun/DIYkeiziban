import React from 'react'
import { useRootContext } from '../../../store/context/RootContext'

/**
 * myプロフィールを表示するページ
 */
export default function MyProfilePage() {
  const { userdata } = useRootContext()
  return (
    <div className="l-inner">
      <h1>MyProfilePage</h1>
      <h2>{userdata.name}</h2>
      <p>{userdata.profile}</p>
    </div>
  )
}
