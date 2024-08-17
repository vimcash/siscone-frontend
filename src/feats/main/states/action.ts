const actions = {
  product: {
    setProductName: (state:any, {payload}:any) => {
      state.currentProduct.productName = payload
    },
    setProductCategory: (state:any, {payload}:any) => {
      state.currentProduct.category = payload
    },
    setProductUnitMesure: (state:any, {payload}:any) => {
      state.currentProduct.unitMeasure = payload
    },
    setProductBarcode: (state:any, {payload}:any) => {
      state.currentProduct.barcode = payload
    },
    setProductPriceSell: (state, {payload}:any) => {
      if(`${Number(payload)}` != 'NaN')
        state.currentProduct.priceSell = payload
    },
    setProductPriceBuy: (state, {payload}:any) => {
      if(`${Number(payload)}` != 'NaN')
        state.currentProduct.priceBuy = payload
    }
  },
  company: {
    setCompanyId: (state: any, {payload}:any) => {
      state.currentCompany.rnc = payload
    },
    setCompanyName: (state: any, {payload}:any) => {
      state.currentCompany.name = payload
    },
    setCompanyOwner: (state: any, {payload}:any) => {
      state.currentCompany.owner = payload
    },
    setCompanyEstablishment: (state: any, {payload}:any) => {
      state.currentCompany.description = payload
    },
    setCompanyEstablishmentSubname: (state: any, {payload}:any) => {
      state.currentCompany.subname = payload
    },
    setCompanyAddress: (state: any, {payload}:any) => {
      state.currentCompany.address = payload
    },
    setCompanyEmail: (state: any, {payload}:any) => {
      state.currentCompany.email = payload
    },
    setCompanyKeycloakClientId: (state: any, {payload}:any) => {
      state.currentCompany.keycloakClientId = payload
    },
  },
  puchase: {
    setBuyProduct: (state: any, {payload}:any) => {
      state.currentBuy.barcode = payload
    },
    setBuyEstablishment: (state: any, {payload}:any) => {
      state.currentBuy.establishment = payload
    },
    setBuyQty: (state: any, {payload}:any) => {
      state.currentBuy.quantity = Number(payload)
    },
    setSellProduct: (state: any, {payload}:any) => {
      state.currentSell.barcode = payload
    },
    setSellEstablishment: (state: any, {payload}:any) => {
      state.currentSell.establishment = payload
    },
    setSellQty: (state: any, {payload}:any) => {
      state.currentSell.quantity = Number(payload)
    }
  },
  variety: {
    setCurrDesc: (state: any, {payload}:any) => {
      state.current.description = payload
    },
    setCurrLiteral: (state: any, {payload}:any) => {
      state.current.literal = payload
    },
    setInit: (state: any) => {
      state.current.description = ''
      state.current.literal = ''
    }
  },
  inventory: {
    setSearch: (state: any, {payload}:any) =>{
      state.search = payload
      state.inventoryListFilter = state.inventoryList.filter((item:any) => 
        item.unitMeasureName.includes(payload.toLowerCase()) ||
        item.warehouseName.includes(payload.toLowerCase()) ||
        item.categoryName.includes(payload.toLowerCase()) ||
        item.productName.includes(payload.toLowerCase())
      )
    }
  }
}

export default actions