import React from "react";
import { useAppSelector } from "../../app/hooks";
import BoardGameContainer from "../../components/BoardGameContainer";
import Info from "../../components/Info";

function Description() {
	const boardgameData = useAppSelector(
		({ boardgame: { currentBoardGame } }) => currentBoardGame
	);
	return (
		<div>
			<Info data={boardgameData!} />
			<BoardGameContainer image={boardgameData?.image!} />
		</div>
	);
}

export default Description;
