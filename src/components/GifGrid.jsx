import { React } from "react";
import { UseFetch } from "../hooks/UseFetch";
import { GifItem } from "../components/GifGridItem";

export const GifGrid = ({ Categoria, Categorias, SetCategorias }) => {

	const { data: imagenes, loading, vaciar } = UseFetch(Categoria);

	if( vaciar ){
		let newArray = [...Categorias]
		newArray.splice(0,1)
		SetCategorias( newArray );
		window.alert("No se encontraron imágenes")
	}

	function EliminarCategoria( e ) {

		let nameCategoria = e.target.name;

		let newArray = [...Categorias ].filter( n => n != nameCategoria );

		SetCategorias(newArray);
	}

	return (
		<>
			{!vaciar && <h3>{Categoria.toUpperCase()} </h3>}

			{loading && (
				<div className="centrar">
					{" "}
					<div className="spinner-border" role="status">
						{" "}
					</div>
				</div>
			)}

			{!vaciar && (
				<>
					<div className="card-grid">
						{imagenes.map((img) => (
							<GifItem key={img.id} {...img} />
						))}
					</div>
					<div className="centrar"><button className="btn btn-danger" name={Categoria} onClick={EliminarCategoria}>Eliminar</button></div>
					<hr></hr>
				</>
			)}
			
		</>
	);
};
