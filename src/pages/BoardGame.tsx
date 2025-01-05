import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { boardgameTabs } from "../utils/Constants";
import Description from "./BoardGamePages/Description";
import Mechanics from "./BoardGamePages/Mechanics";
import Reviews from "./BoardGamePages/Reviews";
import Achievements from "./BoardGamePages/Achievements";
import { useParams } from "react-router-dom";
import { getBoardGameData } from "../app/reducers/getBoardGameData";

function BoardGame() {
	const { currentBoardGameTab } = useAppSelector(({ app }) => app);
	const params = useParams();

	const { currentBoardGame } = useAppSelector(({ boardgame }) => boardgame);
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	if (fromBrowser) {
	// 		dispatch(getBoardGameData([{"id": toString(params), name: "", rank: "", thumbnail: "", yearpublished: ""}]))

	// 	}
	// }, [])

	const boardgame = currentBoardGame;
	console.log(boardgame?.description);

	const root = document.documentElement;
	root.style.setProperty("--accent-color", "#FFFFFF"); // Default color

	return (
		<div>
			{currentBoardGameTab === boardgameTabs.description && <Description />}
			{currentBoardGameTab === boardgameTabs.mechanics && <Mechanics />}
			{currentBoardGameTab === boardgameTabs.reviews && <Reviews />}
			{currentBoardGameTab === boardgameTabs.achievements && <Achievements />}
		</div>
	);
}

export default Wrapper(BoardGame);
