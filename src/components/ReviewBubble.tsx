import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Box,
	Avatar,
	Button,
} from "@mui/material";

interface ReviewBubbleProps {
	username: string;
	rating: number;
	comment: string;
}

const getRatingColor = (rating: number) => {
	if (rating >= 8) return "green";
	if (rating >= 6) return "orange";
	return "red";
};

function ReviewBubble({ username, rating, comment }: ReviewBubbleProps) {
	const [expanded, setExpanded] = useState(false);
	const isLongReview = comment.length > 150;

	return (
		<Card
			sx={{
				height: "100%",
				borderRadius: "1rem",
				boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
				background: "#2a2a3e",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<CardContent>
				<Box
					sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
				>
					<Avatar
						sx={{
							backgroundColor: getRatingColor(rating),
							color: "#fff",
							marginRight: "1rem",
						}}
					>
						{username[0].toUpperCase()}
					</Avatar>
					<Box>
						<Typography
							variant="h6"
							sx={{
								color: "#fff",
								fontWeight: "bold",
							}}
						>
							{username}
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: "#c5c5c5",
							}}
						>
							{rating}/10
						</Typography>
					</Box>
				</Box>
				<Typography
					variant="body1"
					sx={{
						color: "#c5c5c5",
						whiteSpace: expanded ? "normal" : "nowrap",
						overflow: expanded ? "visible" : "hidden",
						textOverflow: expanded ? "initial" : "ellipsis",
					}}
				>
					{comment}
				</Typography>
			</CardContent>
			{isLongReview && (
				<Button
					size="small"
					onClick={() => setExpanded(!expanded)}
					sx={{
						color: "#76c7f5",
						textTransform: "none",
						alignSelf: "flex-start",
						marginLeft: "1rem",
					}}
				>
					{expanded ? "Show Less" : "Show More"}
				</Button>
			)}
		</Card>
	);
}

export default ReviewBubble;
