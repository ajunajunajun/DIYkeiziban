import React, { useMemo } from 'react'
import classnames from 'classnames'

type Props = {
  /** ボタンのクラス名 */
  className?: string

  /** ボタンのサイズ　*/
  size?: 'small' | 'medium' | 'large'

  /** ボタンを何で描写するか　*/
  as?: any // 型むずかしいので一先ずany

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
  // ...propsの型むずかしいので一先ずany
  const classname = useMemo(
    (): string => classnames(className, `c-button--${size}`),
    [className, size]
  )

  return React.createElement(as, {
    className: classname,
    ...props
  })
}
