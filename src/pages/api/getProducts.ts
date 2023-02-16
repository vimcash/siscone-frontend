import type { NextApiHandler } from "next"

const requestType = 'GET'
export const setLogin: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    res.status(200).send([
      {
        id: "2ab85hgsb852vd000",
        name: "Pepino",
        price: 45,
        description: "",
      },
      {
        id: "2ab85hgsb852vd001",
        name: "Tomate",
        price: 35,
        description: "",
      },
      {
        id: "2ab85hgsb852vd002",
        name: "Pasta",
        price: 25,
        description: "",
      },
      {
        id: "2ab85hgsb852vd003",
        name: "Remolacha",
        price: 32,
        description: "",
      },
      {
        id: "2ab85hgsb852vd004",
        name: "Nesquik",
        price: 235,
        description: "",
      },
      {
        id: "2ab85hgsb852vd005",
        name: "Corn Flakes",
        price: 280,
        description: "",
      },
      {
        id: "2ab85hgsb852vd006",
        name: "Sobrino",
        price: 350,
        description: "",
      },
      {
        id: "2ab85hgsb852vd007",
        name: "Camara",
        price: 400,
        description: "",
      },
      {
        id: "2ab85hgsb852vd008",
        name: "Celular",
        price: 981.2,
        description: "",
      },
      {
        id: "2ab85hgsb852vd009",
        name: "Pantalla",
        price: 1010,
        description: "",
      },
      {
        id: "2ab85hgsb852vd010",
        name: "Audifonos",
        price: 250,
        description: "",
      },
      {
        id: "2ab85hgsb852vd011",
        name: "Mascota",
        price: 295,
        description: "",
      },
      {
        id: "2ab85hgsb852vd012",
        name: "Computadora",
        price: 741,
        description: "",
      },
      {
        id: "2ab85hgsb852vd013",
        name: "Libreta",
        price: 874,
        description: "",
      },
      {
        id: "2ab85hgsb852vd014",
        name: "Tarjeta",
        price: 456.8,
        description: "",
      },
      {
        id: "2ab85hgsb852vd015",
        name: "Laptop",
        price: 259.2,
        description: "",
      },
      {
        id: "2ab85hgsb852vd016",
        name: "Mata Moscas",
        price: 741.2,
        description: "",
      },
      {
        id: "2ab85hgsb852vd017",
        name: "Cargador",
        price: 965.2,
        description: "",
      },
      {
        id: "2ab85hgsb852vd018",
        name: "Bateria",
        price: 657.5,
        description: "",
      },
      {
        id: "2ab85hgsb852vd019",
        name: "Cartera",
        price: 745.8,
        description: "",
      },
      {
        id: "2ab85hgsb852vd020",
        name: "T-Shirt",
        price: 748.5,
        description: "",
      },
      {
        id: "2ab85hgsb852vd021",
        name: "Mesa",
        price: 1450.3,
        description: "",
      },
      {
        id: "2ab85hgsb852vd022",
        name: "Reproductor",
        price: 2500.6,
        description: "",
      },
      {
        id: "2ab85hgsb852vd021",
        name: "Microfono",
        price: 789.9,
        description: "",
      },
    ])
  }
export default setLogin