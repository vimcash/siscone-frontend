const actions = {
  setLoginUsername: (state:any, {payload}:any) => {
    state.login.username = payload
  },
  setLoginPassword: (state:any, {payload}:any) => {
    state.login.password = payload
  }
}

export default actions