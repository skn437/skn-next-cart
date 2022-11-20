import { selector } from "recoil";
import { CartAtoms, CartType } from "../atoms/CartAtoms";
import TotalPriceAtom from "../atoms/TotalPriceAtom";

const totalPrice = (obj: CartType): number => {
	let total: number = 0;

	for (let key in obj) {
		total += obj[key].price * obj[key].quantity;
	}

	return total;
};

const TotalPriceAtomSelector = selector<number>({
	key: "total-price-atom-selector",
	get: ({ get }) => {
		const items = get(CartAtoms);
		let total = get(TotalPriceAtom);
		total = totalPrice(items);
		return total;
	},
});

export default TotalPriceAtomSelector;
