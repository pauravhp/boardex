import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Paurav.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
	return (
		<div className="profile">
			<img src={avatarImage} alt="Avatar" className="profile-image" />
			<h1 className="profile-text">Hey! I am Paurav H Param</h1>
			<h2 className="profile-text">The creator of this board game-dex</h2>
			<h4 className="profile-text">
				This Boardex is meant to serve as a board game encyclopedia. All data is
				taken from the BoardGameGeek API.
			</h4>
			<div className="profile-links">
				<a href="https://github.com/pauravhp">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/paurav-h-param-025055264/">
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
}

export default Wrapper(About);
