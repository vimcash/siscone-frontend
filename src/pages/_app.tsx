import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/data/store";
import '../assets/style.css'
import AppFrame from "@/layout/AppFrame";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ToastContainer />
    <AppFrame Component={Component} pageProps={pageProps} />
  </Provider>
}
