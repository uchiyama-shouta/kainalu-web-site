import { VFC } from "react";

import styles from "../styles/components/Header.module.css";

const navList: string[] = [
	"ホーム",
	"ミッション",
	"メディア掲載実績",
	"採用情報",
	"プライバシーポリシー",
];

const Header: VFC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.container}>
				<ul className={styles.flex}>
					{navList.map((nav) => (
						<li key={nav} className={styles.navLink}>
							{nav}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
