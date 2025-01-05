import React, { useEffect, useState } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialBoardGameData } from "../app/reducers/getInitialBoardGameData";
import { getBoardGameData } from "../app/reducers/getBoardGameData";
import BoardGameCardGrid from "../components/BoardGameCardGrid";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { getBoardGameDataBySearch } from "../app/reducers/getBoardGameDataBySearch";
import { GeneratedBoardGameType } from "../utils/Types";
import { debounce } from "../utils/Debounce";

function Search() {
	const dispatch = useAppDispatch();

	const { allInitialBoardGame, randomBoardGames, searchResultBoardGames } =
		useAppSelector(({ boardgame }) => boardgame);

	const [finalBoardGames, setFinalBoardGames] = useState<
		GeneratedBoardGameType[]
	>([]);

	// const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		dispatch(getInitialBoardGameData());
	}, [dispatch]);

	useEffect(() => {
		if (allInitialBoardGame) {
			const clonedBoardGames = [...allInitialBoardGame];
			const randomBoardGamesId = clonedBoardGames
				.sort(() => Math.random() - Math.random())
				.slice(0, 15);
			dispatch(getBoardGameData(randomBoardGamesId));
		}
	}, [allInitialBoardGame, dispatch]);

	useEffect(() => {
		if (searchResultBoardGames) {
			const clonedBoardGames = [...searchResultBoardGames];
			const randomBoardGamesId = clonedBoardGames.slice(0, 15);
			dispatch(getBoardGameData(randomBoardGamesId));
		}
	}, [searchResultBoardGames, dispatch]);

	useEffect(() => {
		if (randomBoardGames) {
			setFinalBoardGames(randomBoardGames);
		}
	}, [randomBoardGames, dispatch]);

	// const handleKeyDown = (event: React.KeyboardEvent) => {
	// 	if (event.key === "Enter") {
	// 		getBoardGame(searchQuery); // Trigger the search when Enter is pressed
	// 	}
	// };

	const handleChange = debounce((value: string) => getBoardGame(value), 300);

	const getBoardGame = async (value: string) => {
		if (value.length) {
			dispatch(getBoardGameDataBySearch(value));
		} else {
			if (allInitialBoardGame) {
				const clonedBoardGames = [...allInitialBoardGame];
				const randomBoardGamesId = clonedBoardGames
					.sort(() => Math.random() - Math.random())
					.slice(0, 15);
				dispatch(getBoardGameData(randomBoardGamesId));
			}
		}
	};

	return (
		<>
			<div className="search">
				<Box sx={{ color: "white", paddingBottom: "1rem", height: "9%" }}>
					<TextField
						sx={{
							fontSize: "1.3rem",
							backgroundColor: "rgba(255,255,255,0.125)",
							"& .MuiInputBase-input": {
								color: "#f5f5f5",
							},
							"& .MuiInputBase-input::placeholder": {
								color: "white",
							},
						}}
						variant="outlined"
						fullWidth
						placeholder="Search Board Game"
						color="success"
						onChange={(e) => handleChange(e.target.value)}
					/>
				</Box>

				<BoardGameCardGrid
					boardgames={finalBoardGames ? finalBoardGames : []}
				/>
			</div>
		</>
	);
}

export default Wrapper(Search);
