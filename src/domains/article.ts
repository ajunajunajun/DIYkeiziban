export type articleType = {
  /** 記事毎のID */
  id: number

  /** 記事の投稿者名 */
  name: string

  /** 記事のサムネイル */
  thumbnail?: string

  /** 記事のタイトル */
  title: string

  /** 記事の本文 */
  text: string
}
