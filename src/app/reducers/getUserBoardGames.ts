import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getDocs, query, where } from "firebase/firestore";
import { boardgameListRef } from "../../utils/FirebaseConfig";
import { UserBoardGameType } from "../../utils/Types";

export const getUserBoardGames = createAsyncThunk(
	"boardgame/userList",
	async (args, { getState }) => {
		try {
			const {
				app: { userInfo },
			} = getState() as RootState;
			if (!userInfo?.email) {
				return;
			}

			const firestoreQuery = query(
				boardgameListRef,
				where("email", "==", userInfo.email)
			);
			const fetchedBoardGames = await getDocs(firestoreQuery);
			if (fetchedBoardGames.docs.length) {
				const userBoardGames: UserBoardGameType[] = [];
				fetchedBoardGames.forEach(async (boardgame) => {
					const boardgames = await boardgame.data().boardgame;
					userBoardGames.push({
						...boardgames,
						firebaseId: boardgame.id,
					});
				});
				return userBoardGames;
			}
			return [];
		} catch (error) {
			console.log(error);
		}
	}
);
