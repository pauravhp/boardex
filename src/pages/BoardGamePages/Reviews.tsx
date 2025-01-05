import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import ReviewBubble from "../../components/ReviewBubble"; // Import the new ReviewBubble component

function Reviews() {
	const { currentBoardGame } = useAppSelector(({ boardgame }) => boardgame);

	const reviews = currentBoardGame?.reviews || []; // Fallback to empty array if no reviews

	return (
		<Box
			sx={{
				padding: "2rem",
				// maxWidth: "92vw",
				margin: "auto",
				background: "linear-gradient(145deg, #1e1e2f, #2a2a3e)",
				borderRadius: "1rem",
				boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
			}}
		>
			<Typography
				variant="h4"
				align="center"
				sx={{
					color: "#fff",
					marginBottom: "1.5rem",
					fontWeight: "bold",
					textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
				}}
			>
				Reviews for {currentBoardGame?.namePrimary || "Board Game"}
			</Typography>

			<Box
				sx={{
					maxHeight: "70vh",
					overflowY: "auto",
					paddingRight: "1rem",
					paddingBottom: "1rem",
				}}
			>
				<Grid container spacing={4}>
					{reviews.map((review, index) => (
						<Grid item xs={12} sm={6} lg={4} key={index}>
							<ReviewBubble
								username={review.username}
								rating={parseInt(review.rating, 10)}
								comment={review.comment}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}

export default Reviews;
