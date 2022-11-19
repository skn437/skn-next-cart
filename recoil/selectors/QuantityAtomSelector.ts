import { selector } from "recoil";
import { CartAtoms, CartType } from "@/recoil/atoms/CartAtoms";
import QuantityAtom from "../atoms/QuantityAtom";

const totalQuantity = (obj: CartType) => {
	let sum: number = 0;

	for (let key in obj) {
		sum += obj[key].quantity;
	}

	return sum;
};

const QuantityAtomSelector = selector<number>({
	key: "quantity-atom-selector",
	get: ({ get }) => {
		const items = get(CartAtoms);
		let sum = get(QuantityAtom);
		sum = totalQuantity(items);
		return sum;
	},
});

export default QuantityAtomSelector;
