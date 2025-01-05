import React, { useEffect } from "react";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import BoardGame from "./pages/BoardGame";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts, setUserStatus } from "./app/slices/AppSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/FirebaseConfig";

function App() {
	const { toasts } = useAppSelector(({ app }) => app);

	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (currentUser) => {
			if (currentUser) {
				dispatch(setUserStatus({ email: currentUser.email }));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		if (toasts.length) {
			const toastOptions: ToastOptions = {
				position: "bottom-right",
				autoClose: 2000,
				pauseOnHover: true,
				draggable: true,
				theme: "dark",
			};
			toasts.forEach((message: string) => {
				toast(message, toastOptions);
			});
			dispatch(clearToasts());
		}
	}, [toasts, dispatch]);

	return (
		<div className="main-container">
			<Background />
			<BrowserRouter>
				<div className="app">
					<NavBar />
					<Routes>
						<Route element={<Search />} path="/search" />
						<Route element={<MyList />} path="/list" />
						<Route element={<About />} path="/about" />
						<Route element={<Compare />} path="/compare" />
						{/* <Route
							path="/boardgame"
							element={<Navigate to="/boardgame/266192" />}
						/> */}
						<Route element={<BoardGame />} path="/boardgame/:id" />
						{/* <Route
							element={<Navigate to="/boardgame/266192" />}
							path="/boardgame/"
						/> */}
						<Route element={<Navigate to="/boardgame/266192" />} path="*" />
					</Routes>

					{/* <Wrapper /> */}
					<Footer />
					<ToastContainer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
