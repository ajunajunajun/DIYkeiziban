import React, { useMemo } from 'react'
import classnames from 'classnames'

type Props = {
  /** ボタンのクラス名 */
  className?: string

  /** ボタンのサイズ　*/
  size: string

  /** 子要素 */
  children?: React.ReactNode
}

const allowedSizes: Props['size'][] = ['small', 'medium', 'large']

export default function Button({ className, size, ...props }: Props) {
  const classname = useMemo(
    (): string =>
      classnames('c-button', className, {
        [`c-button--${size}`]: allowedSizes.includes(size)
      }),
    [className, size]
  )

  return React.createElement('button', {
    className: classname,
    ...props
  })
}
