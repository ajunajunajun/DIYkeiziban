import React from 'react'
import Card from '../Card/Card'
import { articleType } from '../../../domains/article'

import '../../../styles/projects/_cardgroup.scss'

/**
 * CardGroup の Props
 */
type Props = {
  /** カードの記事 */
  articles: articleType[]

  /** カードのサイズ */
  size?: 'small' | 'medium' | 'large'
}

/**
 * 記事の一覧表示用コンポーネントをまとめるプロジェクト
 * @param props
 */
export default function CardGroup({ articles, size }: Props) {
  return (
    <div className="p-cardgroup p-cardgroup--wrap">
      {articles.map(article => (
        <Card article={article} key={article.id} size={size} />
      ))}
    </div>
  )
}
