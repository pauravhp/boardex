import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { boardgameTabs } from "../../utils/Constants";

const initialState: AppTypeInitialState = {
	toasts: [],
	userInfo: undefined,
	currentBoardGameTab: boardgameTabs.description,
};

export const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setToast: (state, action) => {
			const toasts = [...state.toasts];
			toasts.push(action.payload);
			state.toasts = toasts;
		},
		clearToasts: (state) => {
			state.toasts = [];
		},
		setUserStatus: (state, action) => {
			state.userInfo = action.payload;
		},
		setBoardGameTab: (state, action) => {
			state.currentBoardGameTab = action.payload;
		},
	},
});

export const { setToast, clearToasts, setUserStatus, setBoardGameTab } =
	AppSlice.actions;
