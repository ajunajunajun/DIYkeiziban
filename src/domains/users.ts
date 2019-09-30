export type userType = {
  /** ユーザ毎のID */
  id: number

  /** ログイン用メールアドレス */
  email: string

  /** ログイン用パスワード */
  password: string

  /** ユーザ情報 */
  userdata: userdataType[]
}

export type userdataType = {
  /** ユーザ名 */
  name: string

  /** ユーザ情報 */
  profile: string

  /** ユーザ情報 */
  favorite: [number]
}
