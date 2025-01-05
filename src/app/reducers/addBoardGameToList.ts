import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { GeneratedBoardGameType, UserBoardGameType } from "../../utils/Types";
import { addDoc } from "firebase/firestore";
import { boardgameListRef } from "../../utils/FirebaseConfig";
import { getUserBoardGames } from "./getUserBoardGames";

export const addBoardGameToList = createAsyncThunk(
	"boardgame/addBoardGame",
	async (
		boardgame: GeneratedBoardGameType,
		// {
		// 	id: string | null;
		// 	namePrimary: string | null;
		// 	image: string | null;
		// 	categories: string[] | null;
		// 	mechanics: string[] | null;
		// 	playingtime: string | null;
		// }
		{ getState, dispatch }
	) => {
		try {
			const {
				app: { userInfo },
				boardgame: { userBoardGames },
			} = getState() as RootState;
			if (!userInfo?.email) {
				return dispatch(
					setToast(
						"Please login in order to add board games to your collection."
					)
				);
			}
			const index = userBoardGames.findIndex(
				(userBoardGame: UserBoardGameType) => {
					return userBoardGame.namePrimary === boardgame.namePrimary;
				}
			);
			if (index === -1) {
				await addDoc(boardgameListRef, {
					boardgame: boardgame,
					email: userInfo.email,
				});
				await dispatch(getUserBoardGames());
				return dispatch(
					setToast(`${boardgame.namePrimary} added to your collection.`)
				);
			} else {
				return dispatch(
					setToast(`${boardgame.namePrimary} already part of your collection.`)
				);
			}
		} catch (error) {
			console.log(error);
		}
	}
);
