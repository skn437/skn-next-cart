import Link from "next/link";
import styles from "@/components/NavBar.module.css";
import { MdShoppingCart } from "react-icons/md";
import QuantityAtomSelector from "@/recoil/selectors/QuantityAtomSelector";
import { useRecoilValue } from "recoil";

const NavBar: React.FC<{}> = () => {
	const sum = useRecoilValue(QuantityAtomSelector);

	return (
		<div className={styles.container}>
			<ul className={styles.box}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>

				<li>
					<Link href="/store">
						<a>Store</a>
					</Link>
				</li>

				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
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
