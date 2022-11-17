import styles from "@/pages/Home.module.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { GetServerSideProps } from "next";
import axios from "axios";
import type { StoreType } from "@/pages/api/store";
import { CartAtoms, CartType } from "@/recoil/atoms/CartAtoms";

type PropsType = {
	store: StoreType[];
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get("http://localhost:3000/api/store", {
		headers: {
			"Application-Type": "application/json",
		},
	});
	console.log(`Data: `, data);
	return {
		props: {
			store: data,
		},
	};
};

const Home = (props: PropsType) => {
	const [cart, setCart] = useRecoilState(CartAtoms);

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
		<div className={styles.container}>
			<p>Enter</p>
		</div>
	);
};

export default Home;

