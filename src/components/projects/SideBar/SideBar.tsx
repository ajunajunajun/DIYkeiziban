import React, { useEffect, useState } from 'react'
import { useRootContext } from '../../../store/context/RootContext'
import '../../../styles/projects/_sidebar.scss'
import { articles as articlesJson } from '../../../fixtures/articles.json'
import CardGroup from '../CardGroup/CardGroup'

import { articleType } from '../../../domains/article'

/**
 * アプリのサイドバー用プロジェクト
 */
export default function SideBar() {
  const { isUserdata } = useRootContext()
  const [isFavoriteArticles, setFavoriteArticles] = useState<articleType[]>([])
  const articles = articlesJson

  useEffect(() => {
    setFavoriteArticles(isUserdata.favorite.map(i => articles[i]))
  }, [isUserdata.favorite, articles])

  return (
    <header className="p-sidebar">
      <div className="p-sidebar-inner">
        <p>お気に入りの記事一覧</p>
        <div className="p-sidebar-wrapper">
          <CardGroup articles={isFavoriteArticles} size="small" />
        </div>
      </div>
    </header>
  )
}
