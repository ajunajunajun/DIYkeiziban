import React from 'react'
import { useRootContext } from '../../../store/context/RootContext'
import Button from '../../ui/Button/Button'

import { users as usersJson } from '../../../fixtures/users.json'

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

  const { setUserdata } = useRootContext()
  const Login = () => {
    // todo jsonとemail&password照合して、成功したらuserdata持ってくる
    // とりまtorii
    setAuthenticate(!isAuthenticated)
    setUserdata({
      name: usersJson[0].userdata.name,
      profile: usersJson[0].userdata.profile,
      favorite: usersJson[0].userdata.favorite
    })
  }

  return (
    <div className="l-inner l-inner--notauth">
      <input type="email" placeholder="info@sample.com" />
      <input type="password" placeholder="********" />
      <Button as="button" onClick={Login}>
        Login: {String(isAuthenticated)}
      </Button>
    </div>
  )
}
