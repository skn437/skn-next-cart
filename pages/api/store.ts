import { NextApiRequest, NextApiResponse } from "next";
import store from "@/db/items.json";

export interface StoreType {
	id: number | string;
	name: string;
	price: number;
	imgUrl: string;
}

const storeHandler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		res.status(200).json(store);
	}
};

export default storeHandler;
