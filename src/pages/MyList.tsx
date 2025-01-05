import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import BoardGameCardGrid from "../components/BoardGameCardGrid";
import { getUserBoardGames } from "../app/reducers/getUserBoardGames";

function MyList() {
	const { userInfo } = useAppSelector(({ app }) => app);
	const { userBoardGames } = useAppSelector(({ boardgame }) => boardgame);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserBoardGames());
	}, [userInfo, dispatch]);

	return (
		<div className="list">
			{userInfo ? <BoardGameCardGrid boardgames={userBoardGames} /> : <Login />}
		</div>
	);
}

export default Wrapper(MyList);
