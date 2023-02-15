import { iconsList, IconsType } from "./iconsList"

export const IconByName = ({icon}:{icon:IconsType}) => {
  const Icon = iconsList[icon]
  return <Icon />
}

export default IconByName