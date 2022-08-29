import { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
	const [Categorias, SetCategorias] = useState([]);



	return (
		<div className="App">
			<h1 className="text-4xl text-center p-7 font-bold">
				Gif App - Curso React
			</h1>

			<AddCategory
				Categorias={Categorias}
				SetCategorias={SetCategorias}
			/>

			<div className="categorias">
				{Categorias.length > 0 ? (
					Categorias.map((titulo, i) => 
						<GifGrid
							Categoria={titulo}
							key={titulo}
							Categorias={Categorias}
							SetCategorias={SetCategorias}
						/>
						
					)
				) : (
					<h3>No hay categorias</h3>
				)}
			</div>

			<hr className="m-4"></hr>
		</div>
	);
};
