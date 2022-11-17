import styles from "@/pages/store/Store.module.css";
import formatCurrency from "@/utilities/formatCurrency";
import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import type { StoreType } from "@/pages/api/store";
import { IdAtom } from "@/recoil/atoms/IdAtom";
import { CartSelectors } from "@/recoil/selectors/CartSelectors";
import { CartAtoms } from "@/recoil/atoms/CartAtoms";

interface PropsType {
	store: StoreType[];
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios.get("http://localhost:3000/api/store", {
		headers: {
			"Application-Type": "application/json",
		},
	});

	return {
		props: {
			store: data,
		},
	};
};

const Store: NextPage<PropsType> = (props) => {
	const [id, setId] = useRecoilState<number | string>(IdAtom);
	const [cartItem, setCartItem] = useRecoilState(CartSelectors(id));

	const cart = useRecoilValue(CartAtoms);

	return (
		<div>
			<h1>Store</h1>

			<div className={styles.item_holder}>
				{props.store.map((item) => (
					<div
						key={item.id}
						className={styles.item}
						onMouseMove={() => {
							setId(item.id);
						}}
					>
						<img
							src={item.imgUrl}
							alt="image"
							className={styles.item_image}
						></img>

						<div className={styles.info_holder}>
							<p>{item.name}</p>
							<p>{formatCurrency(item.price)}</p>
							<p>ID: {item.id}</p>
							<p>Clicked ID: {id}</p>
						</div>

						<div className={styles.conditional_cart_holder}>
							{cart[item.id].quantity === 0 ? (
								<div className={styles.cart_button_holder}>
									<div
										className={styles.add_to_cart_button}
										onClick={() => {
											setCartItem({
												...cartItem,
												quantity: 1,
											});
										}}
									>
										Add to Cart
									</div>
								</div>
							) : (
								<div className={styles.cart_item_changer_holder}>
									<button
										className={styles.count_decrease_button}
										onClick={() => {
											let tempQuantity = cart[item.id].quantity;
											setCartItem({
												...cartItem,
												quantity: --tempQuantity,
											});
										}}
									>
										-
									</button>

									<div className={styles.count_show}>
										<span>{cart[item.id].quantity} in Cart</span>
									</div>

									<button
										className={styles.count_increase_button}
										onClick={() => {
											let tempQuantity = cart[item.id].quantity;
											setCartItem({
												...cartItem,
												quantity: ++tempQuantity,
											});
										}}
									>
										+
									</button>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Store;
