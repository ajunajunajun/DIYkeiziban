import React from 'react'
import Card from '../Card/Card'
import { articleType } from '../../../domains/article'

import '../../../styles/projects/_cardgroup.scss'

/**
 * CardGroup の Props
 */
type Props = {
  articles: articleType[]
}

/**
 * 記事の一覧表示用コンポーネントをまとめるプロジェクト
 * @param props
 */
export default function CardGroup({ articles }: Props) {
  return (
    <div className="p-cardgroup">
      <div className="p-cardgroup--wrap">
        {articles.map(article => (
          <Card article={article} key={article.id} />
        ))}
      </div>
    </div>
  )
}
