import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardgamesRoute } from "../../utils/Constants";
import axios from "axios";
import { genericBoardGameType } from "../../utils/Types";

const parser = new DOMParser();

export const getInitialBoardGameData = createAsyncThunk(
	"boardgame/initialData",
	async () => {
		try {
			const { data } = await axios.get(boardgamesRoute);
			// Parse the XML string to a DOM object

			const xmlDoc = parser.parseFromString(data, "application/xml");
			// Get all <item> elements
			const items = xmlDoc.getElementsByTagName("item");
			// Convert each <item> to an object
			const itemList: genericBoardGameType[] = Array.from(items).map((item) => {
				return {
					id: item.getAttribute("id"),
					rank: item.getAttribute("rank"),
					thumbnail: item
						.getElementsByTagName("thumbnail")[0]
						.getAttribute("value"),
					name: item.getElementsByTagName("name")[0].getAttribute("value"),
					yearpublished: item
						.getElementsByTagName("yearpublished")[0]
						?.getAttribute("value"),
				};
			});

			// Log the structured list of items
			console.log(itemList);
			return itemList;
		} catch (err) {
			console.log(err);
		}
	}
);
