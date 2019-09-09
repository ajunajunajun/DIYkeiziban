import React from 'react'
import Button from '../../ui/Button/Button'

/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="l-inner l-inner--notauth">
      <h1>DIY Keiziban</h1>
      <h2>DIYの掲示板だよ～～</h2>
      <p>
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ{' '}
      </p>
      <Button as="button" size="small">
        small
      </Button>
      <Button as="button" size="medium">
        medium
      </Button>
      <Button as="button" size="large">
        large
      </Button>
    </div>
  )
}
