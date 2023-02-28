import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from "mongodb";
import { Product } from "../../../interfaces/product";

export const getProduct = async (id: string | ObjectId) : Promise<Product> => {
    id = typeof id === 'string' ? new ObjectId(id) : id;
    const mongoClient = await clientPromise
    
    const data = await mongoClient
    .db()
    .collection('products')
    .findOne({ _id: id }) as Product ;

    return data
}

export default async (req: NextApiRequest, res: NextApiResponse<{product: Product} | string>) => {
    try {
        const id = req.query.id!;
    
        const data = await getProduct(new ObjectId(id as string))

        if(!data){
            res.status(404).json("404 Products not Found")
        }
        
        res.status(200).json({product: data});

    } catch (error) {
        res.status(500).json(error)
    }
}