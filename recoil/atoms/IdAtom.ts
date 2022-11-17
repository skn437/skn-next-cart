import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
const defaultValue: string | number = 0;

export const IdAtom = atom<number | string>({
	key: "id-atom",
	default: defaultValue,
	effects_UNSTABLE: [persistAtom],
});
