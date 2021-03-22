import { ReactNode, useEffect, useState, VFC } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
	children: ReactNode;
	duration?: string;
	play?: boolean | "scroll";
	rootMargin?: number;
};

const WipeIn: VFC<Props> = (props) => {
	const { children, duration = "1s", play = true, rootMargin = 100 } = props;
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
			setFlag(true);
		}
	}, [inView]);
	return (
		<>
			<div className="parent" ref={ref}>
				{children}
				<div
					className={`children ${flag && "wipein"}`}
					style={{
						backgroundColor: "white",
						transition: `width ${duration} ease-in`,
					}}
				/>
			</div>
			<style jsx>{`
				.parent {
					position: relative;
				}
				.children {
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					width: 100%;
				}
				.wipein {
					width: 0;
				}
			`}</style>
		</>
	);
};

export default WipeIn;
