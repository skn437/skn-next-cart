import store from "@/db/items.json";
import styles from "@/pages/store/Store.module.css";
import formatCurrency from "@/utilities/formatCurrency";
import { useState } from "react";

const Store = () => {
	const [quantity, setQuantity] = useState(0);

	return (
		<div>
			<h1>Store</h1>

			<div className={styles.item_holder}>
				{store.map((item) => (
					<div key={item.id} className={styles.item}>
						<img
							src={item.imgUrl}
							alt="image"
							className={styles.item_image}
						></img>

						<div className={styles.info_holder}>
							<p>{item.name}</p>
							<p>{formatCurrency(item.price)}</p>
						</div>

						<div className={styles.conditional_cart_holder}>
							{quantity === 0 ? (
								<div className={styles.cart_button_holder}>
									<div
										className={styles.add_to_cart_button}
										onClick={() => {
											let num = quantity;
											setQuantity(++num);
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
											let num = quantity;
											setQuantity(--num);
										}}
									>
										-
									</button>

									<div className={styles.count_show}>
										<span>{quantity} in Cart</span>
									</div>

									<button
										className={styles.count_increase_button}
										onClick={() => {
											let num = quantity;
											setQuantity(++num);
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
