import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSlice";
import { BoardGameSlice } from "./slices/BoardGameSlice";

export const store = configureStore({
	reducer: {
		app: AppSlice.reducer,
		boardgame: BoardGameSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
