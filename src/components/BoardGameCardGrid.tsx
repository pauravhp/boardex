import React from "react";
import { UserBoardGameType } from "../utils/Types";
import boardgameicon from "../assets/boardgameicon.png";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
	categoryIconNames,
	categoryColors,
	mechanicIconNames,
	mechanicColors,
} from "../utils/Constants";
import { IoGitCompare } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa";
import TypesIcon from "./TypesIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import {
	addToCompare,
	setCurrentBoardGame,
} from "../app/slices/BoardGameSlice";
import { setToast } from "../app/slices/AppSlice";
import { addBoardGameToList } from "../app/reducers/addBoardGameToList";
import { removeBoardGame } from "../app/reducers/removeBoardGamefromUserList";

// Function to get the correct icon for each category
export const getIconForCategory = (category: string) => {
	const iconName = categoryIconNames[category] || "category";
	const iconColor = categoryColors[category] || "#6E6E6E"; // Fallback color if category is not found

	return (
		<TypesIcon iconColor={iconColor} iconName={iconName} typeName={category} />
	);
};

export const getIconForMechanic = (mechanic: string) => {
	const iconName = mechanicIconNames[mechanic] || "extension";
	const iconColor = mechanicColors[mechanic] || "#6E6E6E"; // Fallback color if category is not found

	return (
		<TypesIcon iconColor={iconColor} iconName={iconName} typeName={mechanic} />
	);
};

function BoardGameCardGrid({
	boardgames,
}: {
	boardgames: UserBoardGameType[];
}) {
	const location = useLocation();

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	return (
		<div className="boardgame-card-grid-container">
			<div className="boardgame-card-grid">
				<Grid
					container
					sx={{ alignItems: "stretch", paddingBottom: "5rem" }}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					spacing={2}
				>
					{boardgames &&
						boardgames.length > 0 &&
						boardgames?.map((data: UserBoardGameType) => {
							return (
								<Grid
									sx={{
										justifyContent: "center",
										alignContent: "center",
										display: "flex",
									}}
									size={{ xs: 12, sm: 6, md: 4 }}
									key={data.id}
								>
									<Card
										sx={{
											// backgroundColor: "#2d2d2d",
											backgroundColor: "transparent",
											justifyContent: "center",
											alignContent: "center",
											display: "flex",
											flexDirection: "column",
											// height: "50vh",
											width: "20vw",
											border: "2px solid #3e3e3e",
											borderRadius: "8px",
											boxShadow: 3,
											overflow: "hidden",
										}}
									>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												width: "100%",
												padding: "8px",
												top: "0.75rem",
												color: "white",
												// position: "relative",
												// paddingBottom: "1rem",
											}}
										>
											{location.pathname.includes("/boardgame") ||
											location.pathname.includes("/search") ? (
												<Tooltip title="Add to List">
													<IconButton
														sx={{
															color: "green",
															"&:hover": {
																transition: "0.3s ease-in-out",
																transform: "scale(1.5)",
															},
															cursor: "pointer",
															width: "3rem",
															height: "3rem",
														}}
														onClick={() => dispatch(addBoardGameToList(data))}
													>
														<FaPlus />
													</IconButton>
												</Tooltip>
											) : (
												<Tooltip title="Remove from List">
													<IconButton
														sx={{
															color: "red",
															"&:hover": {
																transition: "0.3s ease-in-out",
																transform: "scale(1.5)",
															},
															cursor: "pointer",
															width: "3rem",
															height: "3rem",
														}}
														onClick={() => {
															dispatch(
																removeBoardGame({ id: data.firebaseId! })
															);
															dispatch(
																setToast(
																	`${data.namePrimary} has been removed from your collection`
																)
															);
														}}
													>
														<FaTrash />
													</IconButton>
												</Tooltip>
											)}
											<Tooltip title="Add to Compare">
												<IconButton
													sx={{
														color: "cyan",
														"&:hover": {
															transition: "0.3s ease-in-out",
															transform: "scale(1.5)",
														},
														cursor: "pointer",
														width: "3rem",
														height: "3rem",
													}}
													onClick={() => {
														dispatch(addToCompare(data));
														dispatch(
															setToast(
																`${data.namePrimary} has been added to Compare Queue`
															)
														);
													}}
												>
													<IoGitCompare />
												</IconButton>
											</Tooltip>
										</Box>

										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												textAlign: "center",
												flex: 1,
											}}
										>
											<CardMedia
												sx={{
													height: 300,
													width: "100%",
													objectFit: "contain",
													objectPosition: "center",
													cursor: "pointer",
												}}
												component="img"
												image={data.image ? data.image : boardgameicon}
												title={
													data.namePrimary ? data.namePrimary : "boardgame"
												}
												onClick={() => {
													dispatch(setCurrentBoardGame(data));
													navigate(`/boardgame/${data.id}`);
												}}
											/>
											<CardContent
												sx={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "center", // Vertically center the content
													alignItems: "center", // Horizontally center the content
													padding: "16px",
												}}
											>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													sx={{ color: "white", wordWrap: "break-word" }}
												>
													{data.namePrimary}
												</Typography>
											</CardContent>
											<CardActions
												sx={{
													bottom: 0,
													width: "100%",
													display: "flex",
													justifyContent: "space-between", // Place buttons on both sides
													padding: "8px", // Add padding to avoid sticking to edges
													marginTop: "auto",
												}}
											>
												{data.categories && (
													<Box
														sx={{
															display: "grid",
															gridTemplateColumns: "repeat(3, 1fr)",
															gap: "8px",
															marginBottom: "1rem",
														}}
													>
														{data.categories
															.slice(0, 6) // Limit to the first 6 categories
															.map((category, index) => (
																<div
																	style={{
																		alignItems: "center",
																		justifyContent: "center",
																		display: "flex",
																	}}
																>
																	{getIconForCategory(category)}
																</div>
															))}
													</Box>
												)}
												{data.mechanics && (
													<Box
														sx={{
															display: "grid",
															gridTemplateColumns: "repeat(3, 1fr)",
															gap: "8px",
															marginBottom: "1rem",
														}}
													>
														{data.mechanics
															.slice(0, 6) // Limit to the first 6 categories
															.map((mechanic, index) => (
																<div
																	style={{
																		alignItems: "center",
																		justifyContent: "center",
																		display: "flex",
																	}}
																>
																	{getIconForMechanic(mechanic)}
																</div>
															))}
													</Box>
												)}
											</CardActions>
										</Box>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</div>
		</div>
	);
}

export default BoardGameCardGrid;
