import { DashboardContainer } from "@/feats/main/containers/DashboardContainer"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
export default function Home({ dispatch, router }) {
  console.log(process.env.PRUEBA)
  return <DashboardContainer dispatch={dispatch} router={router} />
}