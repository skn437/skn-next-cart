import { DefaultValue, selector, selectorFamily } from "recoil";
import { CartAtoms, CartType } from "../atoms/CartAtoms";

interface CartItemType {
	name: string;
	quantity: number;
}

export const CartSelectors = selectorFamily({
	key: "cart-selectors",
	get:
		(id: string | number) =>
		({ get }) => {
			const items = get(CartAtoms);
			const item = items[id];
			return item;
		},
	set:
		(id: number | string) =>
		({ get, set }, newValue) => {
			const items = get(CartAtoms);
			const item = items[id];

			// const newItem = {
			// 	newValue,
			// };

			if (newValue instanceof DefaultValue) {
				return newValue;
			} else if (newValue === undefined) {
				return newValue;
			}

			set(CartAtoms, (prevState) => ({
				...prevState,
				[id]: newValue,
			}));
		},
});
