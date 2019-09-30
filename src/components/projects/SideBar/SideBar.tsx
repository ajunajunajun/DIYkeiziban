import React from 'react'
import { useRootContext } from '../../../store/context/RootContext'
import '../../../styles/projects/_sidebar.scss'

/**
 * アプリのサイドバー用プロジェクト
 */
export default function SideBar() {
  const { userdata } = useRootContext()
  return (
    <header className="c-sidebar">
      <div className="c-sidebar-inner">
        <p>お気に入りの記事一覧</p>
        <p>{userdata.favorite}</p>
      </div>
    </header>
  )
}
