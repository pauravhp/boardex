// Grabbing all board game data from BGG API

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	GeneratedBoardGameType,
	genericBoardGameType,
} from "../../utils/Types";
import axios from "axios";
import { boardgameRoute } from "../../utils/Constants";

const parser = new DOMParser();

export const getBoardGameData = createAsyncThunk(
	"boardgame/randomBoardGame",
	async (boardgames: genericBoardGameType[]) => {
		try {
			const boardgamesData: GeneratedBoardGameType[] = [];
			for await (const boardgame of boardgames) {
				const { data } = await axios.get(boardgameRoute + boardgame.id);
				const xmlDoc = parser.parseFromString(data, "application/xml");

				if (xmlDoc.getElementsByTagName("parsererror").length) {
					console.error("Error parsing XML.");
					continue;
				}

				const item = xmlDoc.getElementsByTagName("item")[0];
				if (!item) continue;

				// Extract categories
				const categories = Array.from(item.getElementsByTagName("link"))
					.filter((link) => link.getAttribute("type") === "boardgamecategory")
					.map((link) => link.getAttribute("value"))
					.filter((value): value is string => value !== null)
					.map((category) => category.split("/")[0]);

				// Extract mechanisms
				const mechanics = Array.from(item.getElementsByTagName("link"))
					.filter((link) => link.getAttribute("type") === "boardgamemechanic")
					.map((link) => link.getAttribute("value"))
					.filter((value): value is string => value !== null)
					.map((mechanic) => mechanic.split("/")[0]);

				const videos = Array.from(item.getElementsByTagName("video"));
				const instructionalVideos = videos.filter(
					(video) => video.getAttribute("category") === "instructional"
				);
				// .filter((video) => video.getAttribute("language") === "English");
				const unboxingVideos = videos.filter(
					(video) => video.getAttribute("category") === "unboxing"
				);

				const comments = Array.from(xmlDoc.getElementsByTagName("comment"))
					.filter((comment) => {
						const value = comment.getAttribute("value");
						return value && value.trim().length > 0;
					})
					.map((comment) => ({
						username: comment.getAttribute("username") || "",
						rating: comment.getAttribute("rating") || "",
						comment: comment.getAttribute("value") || "",
					}));

				const result: GeneratedBoardGameType = {
					id: item.getAttribute("id"),
					namePrimary:
						item.querySelector('name[type="primary"]')?.getAttribute("value") ||
						null,
					nameAlt:
						item
							.querySelector('name[type="alternate"]')
							?.getAttribute("value") || null,
					thumbnail:
						item.getElementsByTagName("thumbnail")[0]?.textContent || null,
					image: item.getElementsByTagName("image")[0]?.textContent || null,
					description:
						item.getElementsByTagName("description")[0]?.textContent || null,
					yearpublished:
						item
							.getElementsByTagName("yearpublished")[0]
							?.getAttribute("value") || null,
					minplayers:
						item.getElementsByTagName("minplayers")[0]?.getAttribute("value") ||
						null,
					maxplayers:
						item.getElementsByTagName("maxplayers")[0]?.getAttribute("value") ||
						null,
					playingtime:
						item
							.getElementsByTagName("playingtime")[0]
							?.getAttribute("value") || null,
					minage:
						item.getElementsByTagName("minage")[0]?.getAttribute("value") ||
						null,
					categories: categories || null,
					mechanics: mechanics || null,
					video1:
						videos.length > 0
							? {
									id: videos[0].getAttribute("id"),
									title: videos[0].getAttribute("title"),
									category: videos[0].getAttribute("category"),
									link: videos[0].getAttribute("link"),
							  }
							: null,
					video2:
						videos.length > 1
							? {
									id: videos[1].getAttribute("id"),
									title: videos[1].getAttribute("title"),
									category: videos[1].getAttribute("category"),
									link: videos[1].getAttribute("link"),
							  }
							: null,
					videoUnboxing:
						unboxingVideos.length > 0
							? {
									id: unboxingVideos[0].getAttribute("id"),
									title: unboxingVideos[0].getAttribute("title"),
									category: unboxingVideos[0].getAttribute("category"),
									link: unboxingVideos[0].getAttribute("link"),
							  }
							: null,
					videoInstructional:
						instructionalVideos.length > 0
							? {
									id: instructionalVideos[0].getAttribute("id"),
									title: instructionalVideos[0].getAttribute("title"),
									category: instructionalVideos[0].getAttribute("category"),
									link: instructionalVideos[0].getAttribute("link"),
							  }
							: null,
					ratingAvg:
						xmlDoc.querySelector("ratings > average")?.getAttribute("value") ||
						null,
					ratingBayes:
						xmlDoc
							.querySelector("ratings > bayesaverage")
							?.getAttribute("value") || null,
					reviews: comments.length > 0 ? comments : [],
					bgRank:
						xmlDoc
							.querySelector('ranks > rank[friendlyname="Board Game Rank"]')
							?.getAttribute("value") || null,
					wishlist:
						xmlDoc.querySelector("ratings > wishing")?.getAttribute("value") ||
						null,
				};

				boardgamesData.push(result);
			}
			console.log("In Generic: ", boardgamesData);
			return boardgamesData;
		} catch (error) {
			console.log(error);
			return []; // Return an empty array on error
		}
	}
);
