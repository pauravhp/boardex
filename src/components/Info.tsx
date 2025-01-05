import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { GeneratedBoardGameType } from "../utils/Types";
import { addBoardGameToList } from "../app/reducers/addBoardGameToList";

function Info({ data }: { data: GeneratedBoardGameType | undefined }) {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const progressBars = document.querySelectorAll("progress");
		progressBars.forEach((progressBar) => {
			progressBar.style.width = "10rem";
		});
	}, []);
	// Helper to decode HTML entities
	const decodeHtmlEntities = (text: string | undefined): string => {
		const parser = new DOMParser();
		return text
			? parser.parseFromString(text, "text/html").documentElement.textContent ||
					""
			: "";
	};
	return (
		<>
			<div className="details">
				<h1 className="name">{data?.namePrimary}</h1>
				{data?.bgRank && <h3>Rank: {data?.bgRank}</h3>}
				<h3>Category: {data?.categories?.slice(0, 2).join("-")}</h3>
				<h3>Mechanics: {data?.categories?.slice(0, 2).join("-")}</h3>

				<h3>
					Players: {data?.minplayers} - {data?.maxplayers}
				</h3>
				<h3>Year Published: {data?.yearpublished}</h3>
				<button onClick={() => dispatch(addBoardGameToList(data!))}>
					Add to List
				</button>
			</div>
			<div className="stats">
				<ul>
					<li>
						Rating: {Math.round(parseFloat(data?.ratingAvg || "0"))}
						<progress max={10} value={data?.ratingAvg!} />
					</li>
					<li>
						Playtime: {data?.playingtime!}
						<progress max={300} value={data?.playingtime!} />
					</li>
					<li>
						Wishlisted: {data?.wishlist!}
						<progress max={10000} value={data?.wishlist!} />
					</li>
				</ul>
			</div>
			<div className="battle-stats">
				<h3>DESCRIPTION</h3>
				<h3>{decodeHtmlEntities(data?.description!)}</h3>
			</div>
		</>
	);
}

export default Info;
