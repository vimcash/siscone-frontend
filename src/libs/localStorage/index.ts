class LocalStorage {
  private static instance: LocalStorage
  private isWin: boolean
  public prueba1: string

  constructor(){
    this.isWin = false
  }

  public static getInstance() {
    if(!this.instance)
      this.instance = new LocalStorage()
    this.instance.isWin = typeof window !== 'undefined'
    return this.instance
  }

  public get = (key:string) => this.isWin ? localStorage.getItem(key) : ''
  public set = (key:string, value:string) => this.isWin ? localStorage.setItem(key, value) : undefined
}

export default LocalStorage.getInstance()