import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

import { Product } from "../../../interfaces/product";

type Return = {
    products: Product[]
}

export const getProducts = async () : Promise<any[]> => {
    const mongoClient = await clientPromise;
    
    const data = await mongoClient
        .db()
        .collection('products')
        .find()
        .toArray();
    return data.map(product => ({...product, id: product._id.toString()}))
}

export default async (req: NextApiRequest, res: NextApiResponse<Return>) => {
    const data = await getProducts();
    res.status(200).json({products: JSON.parse(JSON.stringify(data))});
}