import { VFC } from "react";
import WipeIn from "../components/WipeIn";

const Test: VFC = () => {
	return (
		<div style={{ padding: "100px 100px" }}>
			<WipeIn>
				<p style={{fontSize: 40}}>hello</p>
			</WipeIn>
		</div>
	);
};

export default Test;
