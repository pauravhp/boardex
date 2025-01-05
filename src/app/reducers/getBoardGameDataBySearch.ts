// Grabbing all board game data from BGG API

import { createAsyncThunk } from "@reduxjs/toolkit";
import { genericBoardGameType } from "../../utils/Types";
import axios from "axios";
import { boradgameSearchRoute } from "../../utils/Constants";

const parser = new DOMParser();

export const getBoardGameDataBySearch = createAsyncThunk(
	"boardgame/searchBoardGame",
	async (query: string) => {
		try {
			const { data } = await axios.get(boradgameSearchRoute + query);
			// Parse the XML string to a DOM object

			const xmlDoc = parser.parseFromString(data, "application/xml");
			// Get all <item> elements
			const items = xmlDoc.getElementsByTagName("item");

			// Convert each <item> to an object
			const itemList: genericBoardGameType[] = Array.from(items).map((item) => {
				return {
					id: item.getAttribute("id"),
					rank: "",
					thumbnail: "",
					name: item.getElementsByTagName("name")[0].getAttribute("value"),
					yearpublished: item
						.getElementsByTagName("yearpublished")[0]
						.getAttribute("value"),
				};
			});
			const finalList = itemList.slice(0, 15);
			// Log the structured list of items
			console.log("In Search:", finalList);
			return finalList;
		} catch (error) {
			console.log(error);
			return []; // Return an empty array on error
		}
	}
);
