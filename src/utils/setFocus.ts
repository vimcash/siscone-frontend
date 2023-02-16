export const setFocus = (name:string) => {
  if(typeof window != 'undefined'){
    const elementFocus = document.getElementById(name)
    elementFocus ? elementFocus.focus() : undefined
  }
}