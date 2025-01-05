import React from "react";

function BoardGameContainer({ image }: { image: string }) {
	return (
		<div className="circle-container">
			<div className="outer-circle">
				<div className="inner-circle">
					<img src={image} alt="boardgame" />
				</div>
				<div className="lines">
					<div className="line line-1"></div>
					<div className="line line-2"></div>
				</div>
			</div>
		</div>
	);
}

export default BoardGameContainer;
