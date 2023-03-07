import { useDispatch } from "react-redux";
import { AppDispatch } from "../data/store/types";

export const useAppDispatch = () => useDispatch<AppDispatch>()