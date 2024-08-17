import { useAppDispatch, useAppSelector } from "@/hooks"
import Controller from "./controller"
import { useRouter } from "next/router"
import { selectGlobal } from "@/data/state"
import { Spinner } from "@/components/Spinner"
import { Popup } from "../Popup"
import Header from "../Header"

const AppFrame = ({Component, pageProps}) => {
  const dispatch = useAppDispatch()
  const {
    getAppInit,
    getAppReady,
    getDispatch,
    getRouter,
    getIsLogin,
    getCompanyName
  } = Controller.getInstance(dispatch, useAppSelector(selectGlobal), useRouter())
  // if(getAppInit() || getIsLogin() == null || getCompanyName() == null)
  //   return <Spinner />
  // if(!getAppReady())
  //   return <>
  //     <Spinner />
  //     <div style={{display: 'none'}}><Component dispatch={dispatch} router={getRouter()} {...pageProps} /></div>
  //   </>

  return <>
    <Popup />
    <Header dispatch={getDispatch()} router={getRouter()} companyName={getCompanyName()} />
    <Component dispatch={dispatch} router={getRouter()} {...pageProps} />
  </>
}

export default AppFrame