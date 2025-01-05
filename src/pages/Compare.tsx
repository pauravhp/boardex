import React from "react";
import Wrapper from "../sections/Wrapper";
import { useAppSelector } from "../app/hooks";
import CompareContainer from "../components/CompareContainer";

function Compare() {
	const { compareQueue } = useAppSelector(({ boardgame }) => boardgame);

	return (
		<div className="compare">
			<CompareContainer
				boardgame={compareQueue[0]}
				isEmpty={compareQueue.length < 1}
			/>
			<CompareContainer
				boardgame={compareQueue[1]}
				isEmpty={compareQueue.length < 2}
			/>
		</div>
	);
}

export default Wrapper(Compare);
