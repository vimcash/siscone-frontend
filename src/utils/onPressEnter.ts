export const onPressEnter = 
  (inKey, inDo:Function) => 
    inKey.keyCode == 13 ? 
      inDo() : undefined


export default onPressEnter