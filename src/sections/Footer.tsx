import { signOut } from "firebase/auth";
import React from "react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
	setBoardGameTab,
	setToast,
	setUserStatus,
} from "../app/slices/AppSlice";
import { boardgameTabs } from "../utils/Constants";
import { useLocation } from "react-router-dom";

function Footer() {
	const dispatch = useAppDispatch();
	const { currentBoardGameTab } = useAppSelector(({ app }) => app);
	const location = useLocation();
	const handleLogout = () => {
		signOut(firebaseAuth);
		dispatch(setUserStatus(undefined));
		dispatch(setToast("Logged out successfully from Firebase."));
	};

	const routes = [
		{
			name: boardgameTabs.description,
			value: "Description",
		},
		{
			name: boardgameTabs.mechanics,
			value: "Mechanics",
		},
		{
			name: boardgameTabs.achievements,
			value: "Achievements",
		},
		{
			name: boardgameTabs.reviews,
			value: "Reviews",
		},
	];

	return (
		<footer>
			<div className="block"></div>
			<div className="data">
				{location.pathname.includes("/boardgame") && (
					<ul>
						{routes.map((route) => {
							return (
								<li
									key={route.name}
									className={`${
										currentBoardGameTab === route.name ? "active" : ""
									}`}
									onClick={() => {
										dispatch(setBoardGameTab(route.name));
									}}
								>
									{route.value}
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<div className="block">
				<MdOutlinePowerSettingsNew onClick={handleLogout} />
			</div>
		</footer>
	);
}

export default Footer;
