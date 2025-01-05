import { createSlice } from "@reduxjs/toolkit";
import {
	BoardGameTypeInitialState,
	GeneratedBoardGameType,
} from "../../utils/Types";
import { getInitialBoardGameData } from "../reducers/getInitialBoardGameData";
import { getBoardGameData } from "../reducers/getBoardGameData";
import { getBoardGameDataBySearch } from "../reducers/getBoardGameDataBySearch";
import { getUserBoardGames } from "../reducers/getUserBoardGames";
import { removeBoardGame } from "../reducers/removeBoardGamefromUserList";

const initialState: BoardGameTypeInitialState = {
	allInitialBoardGame: undefined,
	randomBoardGames: undefined,
	searchResultBoardGames: undefined,
	compareQueue: [],
	userBoardGames: [],
	currentBoardGame: undefined,
};

export const BoardGameSlice = createSlice({
	name: "boardgame",
	initialState,
	reducers: {
		addToCompare: (state, action) => {
			const index = state.compareQueue.findIndex(
				(boardgame: GeneratedBoardGameType) =>
					boardgame.id === action.payload.id
			);
			if (index === -1) {
				if (state.compareQueue.length === 2) {
					state.compareQueue.pop();
				}
				state.compareQueue.unshift(action.payload);
			}
		},
		removeFromCompare: (state, action) => {
			const index = state.compareQueue.findIndex(
				(boardgame: GeneratedBoardGameType) =>
					boardgame.id === action.payload.id
			);
			const queue = [...state.compareQueue];
			queue.splice(index, 1);
			state.compareQueue = queue;
		},
		setCurrentBoardGame: (state, action) => {
			state.currentBoardGame = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getInitialBoardGameData.fulfilled, (state, action) => {
			state.allInitialBoardGame = action.payload;
		});
		builder.addCase(getBoardGameData.fulfilled, (state, action) => {
			state.randomBoardGames = action.payload;
		});
		builder.addCase(getBoardGameDataBySearch.fulfilled, (state, action) => {
			state.searchResultBoardGames = action.payload;
		});
		builder.addCase(getUserBoardGames.fulfilled, (state, action) => {
			state.userBoardGames = action.payload!;
		});
		builder.addCase(removeBoardGame.fulfilled, (state, action) => {
			const userBoardGame = [...state.userBoardGames];
			const index = userBoardGame.findIndex(
				(boardgame) => boardgame.firebaseId === action.payload?.id
			);
			userBoardGame.splice(index, 1);
			state.userBoardGames = userBoardGame;
		});
	},
});

export const { addToCompare, removeFromCompare, setCurrentBoardGame } =
	BoardGameSlice.actions;
