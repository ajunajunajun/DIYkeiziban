import React, { useMemo } from 'react'
import classnames from 'classnames'

type AsTypeUnion = keyof React.ReactHTML | React.ComponentType<any>

// asからcomponentのpropsをもってきてPropsに入れれたら多分解決?muzukasi

type Props = {
  /** ボタンのクラス名 */
  className?: string

  /** ボタンのサイズ */
  size?: 'small' | 'medium' | 'large'

  /** ボタンを何として描写するか */
  as?: AsTypeUnion

  /** 子要素 */
  children?: React.ReactNode
}

/**
 * 汎用ボタンコンポーネント
 * @param props
 */
export default function Button({
  className,
  size = 'medium',
  as = 'button',
  ...props
}: any) {
  // ...propsの型よくわからないので一先ずany
  const classname = useMemo(
    (): string => classnames('c-button', className, `c-button--${size}`),
    [className, size]
  )

  return React.createElement(as, {
    className: classname,
    ...props
  })
}
