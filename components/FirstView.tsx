import { VFC } from "react";
import Image from "next/image";

import styles from "../styles/components/FirstView.module.css";
import FadeIn from "./FadeIn";

const FirstView: VFC = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.imageArea}>
					<Image src="/baby.jpg" layout="fill" className={styles.image} />
				</div>
				<div className={styles.text}>
					<FadeIn duration="1s">
						<h1 className={`${styles.center} ${styles.companyName}`}>
							空と太陽と宝物
						</h1>
						<p className={`${styles.center} ${styles.keyword}`}>
							Work with the sea waves
						</p>
					</FadeIn>
				</div>
			</div>
		</>
	);
};

export default FirstView;
