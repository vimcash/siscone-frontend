import { InputLabel } from "../../../components/form/InputLabel";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectExample1, selectExample2, setExample1, setExample2 } from "../states/templateState";
const formCss = `position-absolute top-50 start-50 translate-middle responsive-1 trs-1 bg-dark-content p-3 rounded`
export const TemplateForm = () => {
  // const distpach = useAppDispatch()
  // const example1 = useAppSelector(selectExample1)
  // const example2 = useAppSelector(selectExample2)
  return (
    <div className={formCss}>
      {/* <label htmlFor="">{example1}</label>
      <InputLabel 
        title="Example 1" 
        value={example1}
        onChangeValue={e => distpach(setExample1(e.target.value))}
        />
      <label htmlFor="">{example2}</label>
      <InputLabel 
        title="Example 2" 
        value={example2}
        onChangeValue={e => distpach(setExample2(e.target.value))}
        />*/}
    </div> 
  )
}