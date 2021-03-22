import { ReactNode, VFC } from "react";
import Image from "next/image";

import styles from "../styles/components/Section.module.css";

type Props = {
	children: ReactNode;
	image: string;
};

const Section: VFC<Props> = (props) => {
	const { children, image } = props;
	return (
		<section className={styles.flex}>
			<div className={styles.left}>{children}</div>
			<div className={styles.right}>
				<Image
					src={image}
               layout="fill"
					className={styles.image}
				/>
			</div>
		</section>
	);
};

export default Section;
