import React from "react";
import { UserBoardGameType } from "../utils/Types";
import IconButton from "@mui/material/IconButton/IconButton";
import { FaPlus } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import boardgameicon from "../assets/boardgameicon.png";
import { getIconForCategory, getIconForMechanic } from "./BoardGameCardGrid";
import Rating from "@mui/material/Rating";
import { useAppDispatch } from "../app/hooks";
import { removeFromCompare } from "../app/slices/BoardGameSlice";
import { useNavigate } from "react-router-dom";
import { Tooltip, Zoom } from "@mui/material";
import { addBoardGameToList } from "../app/reducers/addBoardGameToList";

function CompareContainer({
	boardgame = undefined,
	isEmpty = false,
}: {
	boardgame?: UserBoardGameType;
	isEmpty?: boolean;
}) {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	return (
		<div className="compare-container">
			{isEmpty && (
				<div className="empty">
					<IconButton
						sx={{
							cursor: "pointer",
							borderRadius: "10rem",
							padding: "2rem",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "none",
							fontSize: "5rem",
							color: "whitesmoke",
							// backgroundColor: "var(--accent-color)",
						}}
					>
						<FaPlus />
					</IconButton>
					<Typography
						variant="h6"
						sx={{
							color: "white",
							textTransform: "uppercase",
							letterSpacing: "0.3rem",
						}}
					>
						Add Board game to Comparison
					</Typography>
				</div>
			)}
			{boardgame && (
				<div className="compare-element">
					<div className="compare-info">
						<div className="compare-details">
							<Typography
								variant="h6"
								sx={{
									color: "white",
									// textTransform: "uppercase",
									// letterSpacing: "0.3rem",
								}}
							>
								{boardgame.namePrimary}
							</Typography>
							<Box
								component="img"
								src={boardgame.image || boardgameicon}
								alt={boardgame.namePrimary || `${boardgame.namePrimary} image`}
								sx={{
									height: "10rem",
									width: "100%",
									objectFit: "contain",
									objectPosition: "center",
								}}
							></Box>
						</div>
						<div className="boardgame-stats-container">
							<div className="boardgame-stats">
								<h4 className="boardgame-stats-title">Category</h4>
								<div className="boardgame-stats-icons">
									{boardgame.categories &&
										boardgame.categories
											.slice(0, 9) // Limit to the first 6 categories
											.map((category, index) => (
												<div className="boardgame-type">
													{getIconForCategory(category)}
												</div>
											))}
								</div>
								<h4 className="boardgame-stats-title">Mechanics</h4>
								<div className="boardgame-stats-icons">
									{boardgame.mechanics &&
										boardgame.mechanics
											// .slice(0, 9) // Limit to the first 6 categories
											.map((mechanic, index) => (
												<div className="boardgame-type">
													{getIconForMechanic(mechanic)}
												</div>
											))}
								</div>
								<h4 className="boardgame-stats-title">Year Published</h4>
								<div className="boardgame-stats-icons">
									<h4 className="boardgame-stats-title">
										{boardgame.yearpublished}
									</h4>
								</div>

								<h4 className="boardgame-stats-title">User Ratings</h4>

								<Tooltip
									title={
										boardgame.ratingAvg ? parseFloat(boardgame.ratingAvg) : 0
									}
									slots={{
										transition: Zoom,
									}}
									arrow
								>
									<div>
										<Rating
											value={
												boardgame.ratingAvg
													? parseFloat(boardgame.ratingAvg)
													: 0
											}
											readOnly
											precision={0.2}
											max={10}
											size="large"
										/>
									</div>
								</Tooltip>
								<h4 className="boardgame-stats-title">Playtime</h4>
								<div className="boardgame-stats-icons">
									<h4 className="boardgame-stats-title">
										{boardgame.playingtime} mins
									</h4>
								</div>
								<h4 className="boardgame-stats-title">No. of Players</h4>
								<div className="boardgame-stats-icons">
									<h4 className="boardgame-stats-title">
										{boardgame.minplayers} - {boardgame.maxplayers}
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="compare-action-buttons">
						<button
							className="compare-btn"
							onClick={() => dispatch(addBoardGameToList(boardgame))}
						>
							Add
						</button>
						<button
							className="compare-btn"
							onClick={() => navigate(`/boardgame/${boardgame.id}`)}
						>
							View
						</button>
						<button
							className="compare-btn"
							onClick={() => dispatch(removeFromCompare({ id: boardgame.id }))}
						>
							Remove
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default CompareContainer;
