import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface CartType {
	[id: string | number]: {
		name: string;
		price: number;
		quantity: number;
	};
}

// const { persistAtom } = recoilPersist({
// 	key: "recoil-cart-atoms",
// 	storage: localStorage,
// });
const { persistAtom } = recoilPersist();
const defaultCart: CartType = {
	[0]: {
		name: "",
		price: 0,
		quantity: 0,
	},
};

export const CartAtoms = atom<CartType>({
	key: "cart-atoms",
	default: defaultCart,
	effects_UNSTABLE: [persistAtom],
});
