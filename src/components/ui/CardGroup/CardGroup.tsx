import React from 'react'
import Card from '../Card/Card'
import { articleType } from '../../../domains/article'

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
    <div className="p-home-cardgroup">
      {articles.map(article => (
        <dl>
          <Card article={article} />
        </dl>
      ))}
    </div>
  )
}
