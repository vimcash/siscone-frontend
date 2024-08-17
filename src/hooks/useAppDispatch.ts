import { useDispatch } from "react-redux";
import { AppDispatch } from "../data/store/types";
let dispatch
export const useAppDispatch = () => {
  if (!dispatch)
    dispatch = useDispatch<AppDispatch>()
  return dispatch
}