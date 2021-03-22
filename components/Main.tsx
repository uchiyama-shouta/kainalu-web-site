import FirstView from "../components/FirstView";
import Section from "../components/Section";
import WipeIn from "./WipeIn";

const Main = () => {
	return (
		<>
			<main>
				<FirstView />
				<Section image="/mother.jpg">
					<WipeIn duration="2s" play="scroll">
						<h2>自費マッサージ</h2>
						<p>
							妊娠、出産は女性にとって大切な時間です。
							<br />
							ワクワクとドキドキ、そして不安、体調の変化でイライラもします。
							<br />
							赤ちゃんがお母さんのお腹の中で心地よく成長する為にお母さんの体調の変化や気持ちに寄り添って経験豊富なマッサージ師がお宅に訪問させて頂きます。
							<br />
							心も身体もリラックスし、全身のメンテナンスをさせて頂きます。
							<br />
							お母さんがリラックスすると赤ちゃんもリラックスします。
							<br />
							赤ちゃんに会うための準備を一緒にお手伝いさせて下さい。
						</p>
					</WipeIn>
				</Section>
				<Section image="/mother-and-baby.jpg">
					<WipeIn duration="2s" play="scroll">
						<h2>スタッフ</h2>
						<p>
							自身も3人のお母さんとして子育てしながらマッサージ師として施術もしながら運営まで行っています。
							<br />
							明るい性格で先輩ママとしても相談にのってくれます。
							<br />
							出産後の体を元に戻すためのマッサージを行います。
							<br />
							授乳や夜泣き、成長で心配な事を話しながらメンテナスをしていきます。
						</p>
					</WipeIn>
				</Section>
			</main>
			<style jsx>{`
				h2 {
					font-size: 20px;
					color: #a0a09f;
					width: 90%;
					margin: 0 auto;
					margin-bottom: 40px;
				}
				p {
					font-size: 16px;
					color: #777;
					width: 90%;
					margin: 0 auto;
					line-height: 2.3;
				}
			`}</style>
		</>
	);
};

export default Main;
