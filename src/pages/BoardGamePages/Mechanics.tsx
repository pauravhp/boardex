import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { useAppSelector } from "../../app/hooks";

function Mechanics() {
	const { currentBoardGame } = useAppSelector(({ boardgame }) => boardgame);

	const boardgame = currentBoardGame;
	const videos = [];

	boardgame?.videoInstructional?.link &&
		videos.push(boardgame?.videoInstructional);
	boardgame?.video1?.link && videos.push(boardgame?.video1);
	boardgame?.video2?.link && videos.push(boardgame?.video2);
	boardgame?.videoUnboxing?.link && videos.push(boardgame?.videoUnboxing);

	return (
		<div
			style={{
				height: "80vh",
				overflowY: "auto",
				padding: "1rem",
			}}
		>
			<Grid container spacing={4} justifyContent="center">
				{videos.length > 0 ? (
					videos.map((video, index) => (
						<Grid item xs={12} sm={6} key={index}>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "100%",
									boxShadow: 3,
									backgroundColor: "transparent",
									color: "white",
								}}
							>
								<ReactPlayer
									url={video?.link ? video.link : ""}
									width="100%"
									height="300px"
									controls
								/>
								<CardContent
									sx={{
										flexGrow: 1,
										textAlign: "center",
									}}
								>
									<Typography
										variant="h6"
										align="center"
										sx={{
											whiteSpace: "normal",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{video?.title ? video.title : "Untitled Video"}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))
				) : (
					<Typography variant="h5" align="center" sx={{ mt: 4 }}>
						No videos to display.
					</Typography>
				)}
			</Grid>
		</div>
	);
}

export default Mechanics;
