import React from "react";
import { Box, Typography } from "@mui/material";

function Achievements() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh",
				// background: "linear-gradient(145deg, #1e1e2f, #2a2a3e)",
				color: "white",
				textAlign: "center",
			}}
		>
			<Typography
				variant="h2"
				sx={{
					fontWeight: "bold",
					textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
				}}
			>
				Coming Soon...
			</Typography>
		</Box>
	);
}

export default Achievements;
