import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

let defaultQuantity: number = 0;

const QuantityAtom = atom<number>({
	key: "quantity-atom",
	default: defaultQuantity,
	effects_UNSTABLE: [persistAtom],
});

export default QuantityAtom;
