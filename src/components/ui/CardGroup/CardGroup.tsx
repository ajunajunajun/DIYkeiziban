import React from 'react'
import Card from '../Card/Card'
import { articleType } from '../../../domains/article'

import '../../../styles/components/_card.scss'

/**
 * CardGroup の Props
 */
type Props = {
  articles: articleType[]
}

/**
 * 記事の一覧表示用コンポーネントをまとめるコンポーネント
 * @param props
 */
export default function CardGroup({ articles }: Props) {
  return (
    <div className="p-cardgroup">
      <h1 className="p-cardgroup__h1">記事一覧</h1>
      <div className="p-cardgroup--wrap">
        {articles.map(article => (
          <Card article={article} key={article.id} />
        ))}
      </div>
    </div>
  )
}
