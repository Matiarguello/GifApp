import React from "react";

export function GifItem({ id, title, url }) {
	return (
		<div className="card animate__bounceIn animate__slow">
			<p>{title}</p>
			{/* <img src={url} alt={title} href={url}></img></a> */}
			<a href={url} target="_blank">
				<div
					className="gif"
					style={{
						background: `url(${url})`,
						backgroundPosition: "center",
					}}
				></div>
			</a>
		</div>
	);
}
