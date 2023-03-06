import { ObjectId } from "mongodb";

export type Product = {
    _id: ObjectId,
    title: string,
    dscription: string,
    productType:string,
    category: string,
    photo: string,
    createdAt: Date,
}