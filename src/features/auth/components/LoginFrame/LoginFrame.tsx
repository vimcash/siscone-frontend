import { InputIcon } from "../../../../components/form"
import { useAppDispatch } from "../../../../hooks"
import { setFocus } from "../../../../utils"
import { usePostAPILogin } from "../../hooks/usePostAPILogin"
import { setPassword, setUsename } from "../../states/loginState/loginState"

const LoginFrame = ({login}) => {
  const dispatch = useAppDispatch()
  const { username, password } = login
  return (
    <div className="position-absolute top-50 start-50 translate-middle responsive-1 ">
      <InputIcon icon="fileCsv" name="username" onChangeValue={e => dispatch(setUsename(e))} className="mb-2" value={username} onPressEnter={() => (username && password) ? dispatch(usePostAPILogin({username, password})): username ? setFocus("password") : undefined}/>
      <InputIcon icon="fileCsv" name="password" onChangeValue={e => dispatch(setPassword(e))} value={password} onPressEnter={() => (username && password) ? dispatch(usePostAPILogin({username, password})): username ? undefined : setFocus("username")}/>
    </div>
  )
}

export default LoginFrame