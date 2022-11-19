import Link from "next/link";
import styles from "@/components/NavBar.module.css";
import { MdShoppingCart } from "react-icons/md";
import QuantityAtomSelector from "@/recoil/selectors/QuantityAtomSelector";
import { useRecoilValue } from "recoil";

const NavBar = () => {
	const sum = useRecoilValue(QuantityAtomSelector);

	return (
		<div className={styles.container}>
			<ul className={styles.box}>
				<li>
					<Link href="/">Home</Link>
				</li>

				<li>
					<Link href="/store">Store</Link>
				</li>

				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>

			<div className={styles.cart_number_holder}>
				<span className={styles.cart}>
					<MdShoppingCart></MdShoppingCart>
				</span>

				<span className={styles.item_number}>{sum}</span>
			</div>
		</div>
	);
};

export default NavBar;
