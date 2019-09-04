import React from 'react'
import { articleType } from '../../../domains/article'

/**
 * Card の Props
 */
type Props = {
  article: articleType
}

/**
 * 記事の一覧表示用のコンポーネント
 * @param props
 */
export default function Card({ article }: Props) {
  return (
    <>
      {article.id}
      <dt>
        <h2>{article.title}</h2>
      </dt>
      <dd>
        <p>{article.text}</p>
      </dd>
    </>
  )
}
