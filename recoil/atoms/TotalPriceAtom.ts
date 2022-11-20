import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultPrice: number = 0;

const TotalPriceAtom = atom<number>({
	key: "total-price-atom",
	default: defaultPrice,
	effects_UNSTABLE: [persistAtom],
});

export default TotalPriceAtom;
