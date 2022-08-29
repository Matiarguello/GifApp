import { useState, useEffect } from "react";
import { ObtenerGifs } from "../helpers/GetGifs";

export const UseFetch = (categoria) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		vaciar:false
	});

	useEffect(() => {
		ObtenerGifs(categoria).then((imgs) => {
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
					vaciar: imgs.length == 0 ? true: false
				});
				
			}, 2000);
		});
	}, [categoria]);

	return state;
};
