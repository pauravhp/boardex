import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

function TypesIcon({
	iconName,
	iconColor,
	typeName,
}: {
	iconName: string;
	iconColor: string;
	typeName: string;
}) {
	return (
		<Tooltip
			title={typeName}
			slots={{
				transition: Zoom,
			}}
			arrow
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: iconColor, // Set background color per category
					borderRadius: "50%", // Circular background
					padding: "0.75rem", // Adjust padding using rem for responsiveness
					width: "4.5vh", // Size of the icon circle (responsive)
					height: "4.5vh", // Size of the icon circle (responsive)
					color: "white",
				}}
			>
				<span
					className="material-symbols-outlined"
					style={{ fontSize: "3.5vh" }}
				>
					{" "}
					{iconName}
				</span>
			</div>
		</Tooltip>
	);
}

export default TypesIcon;
