import styles from "@/pages/store/Store.module.css";
import formatCurrency from "@/utilities/formatCurrency";
import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useRecoilState } from "recoil";
import type { StoreType } from "@/pages/api/store";
import { IdAtom } from "@/recoil/atoms/IdAtom";
import { CartItemType, CartSelectors } from "@/recoil/selectors/CartSelectors";
import { CartAtoms, CartType } from "@/recoil/atoms/CartAtoms";
import { useEffect } from "react";

interface PropsType {
	store: StoreType[];
}

export const getServerSideProps: GetServerSideProps = async () => {
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
	const [cartItem, setCartItem] = useRecoilState<CartItemType>(
		CartSelectors(id)
	);

	const [cart, setCart] = useRecoilState<CartType>(CartAtoms);

	const list: CartType[] = props.store.map((item) => {
		const object = {
			[item.id]: {
				name: item.name,
				quantity: 0,
			},
		};

		return object;
	});
	const objList = Object.assign({}, ...list);

	useEffect(() => {
		setCart(objList);
		console.log(`objList: `, cart);
	}, []);

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
