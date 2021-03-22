import { VFC } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home: VFC = () => {
	return (
		<>
			<Head>
				<title>空と太陽と宝物</title>
			</Head>
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default Home;
