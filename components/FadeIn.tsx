import { ReactNode, useEffect, useState, VFC } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
	children: ReactNode;
	duration?: string;
	play?: boolean | "scroll";
	rootMargin?: number;
};

const FadeIn: VFC<Props> = (props) => {
	const { children, duration = "1s", rootMargin = 100, play = true } = props;
	const [flag, setFlag] = useState(false);

	const option = {
		rootMargin: `0px 0px -${rootMargin}px 0px`,
	};
	const [ref, inView] = useInView(option);

	useEffect(() => {
		if (!play) {
			return;
		} else if (play === "scroll") {
			if (inView) {
				setFlag(true);
			}
		} else {
			setTimeout(() => {
				setFlag(true);
			}, 500);
		}
	}, [inView]);

	return (
		<>
			<div
				ref={ref}
				style={{ transition: `opacity ${duration}`, opacity: flag ? 1 : 0 }}
			>
				{children}
			</div>
		</>
	);
};

export default FadeIn;
