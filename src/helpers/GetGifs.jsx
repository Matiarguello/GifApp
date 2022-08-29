import React from 'react'


export const ObtenerGifs = async ( Categoria ) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( Categoria ) }&api_key=45Ty5jU81erBRNf6RbqosInWWq6d6WqF&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			url: img.images.downsized_medium.url,
			title: img.title,
		};
	});

	return gifs;
};
