import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { boardgameListRef } from "../../utils/FirebaseConfig";

export const removeBoardGame = createAsyncThunk(
	"boardgame/remove",
	async ({ id }: { id: string }) => {
		try {
			await deleteDoc(doc(boardgameListRef, id));
			return { id };
		} catch (error) {
			console.log(error);
		}
	}
);
