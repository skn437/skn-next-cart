import styles from "@/pages/Home.module.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import type { StoreType } from "@/pages/api/store";
import { CartAtoms, CartType } from "@/recoil/atoms/CartAtoms";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<p>Enter</p>
		</div>
	);
};

export default Home;

