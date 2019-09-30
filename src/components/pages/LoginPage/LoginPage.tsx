import React from 'react'
import { useRootContext } from '../../../store/context/RootContext'
import Button from '../../ui/Button/Button'

/**
 * LoginPage の Props
 */
type Props = {}

/**
 * ログイン処理用のページ
 * todo
 * @param props
 */
export default function LoginPage() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const Toggle = () => {
    setAuthenticate(!isAuthenticated)
  }

  return (
    <div className="l-inner l-inner--notauth">
      <input type="email" placeholder="info@sample.com" />
      <input type="password" placeholder="********" />
      <Button as="button" onClick={Toggle}>
        Login: {String(isAuthenticated)}
      </Button>
    </div>
  )
}
