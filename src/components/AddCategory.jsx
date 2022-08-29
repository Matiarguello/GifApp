/* 
	Este componente es el formulario de agregar imagenes.

	Recibe la constante de Categorias y la funcion de SetCategorias
	desde el App.jsx
*/

import { React, useState } from "react";

function AddCategory({ Categorias, SetCategorias }) {

	const [ InputValue, SetInputValue ] = useState("");

	const Agregar = () => {
		let value = InputValue;

		if (value.length < 3) {
			window.alert("Se requieren 3 caracteres como mínimo");
			return;
		}

		value.toLowerCase().trim();

		let founded = 0;

		for ( let i = 0; i < Categorias.length; i++ ) {
			if (Categorias[i] === value) {
				founded = 1;
				break;
			}
		}

		!founded == 1
			? SetCategorias([value, ...Categorias])
			: window.alert("Esta categoria ya existe!");

		SetInputValue("");
	};

	const InputChange = (e) => {
		SetInputValue(e.target.value);
	};

	const SubmitHandle = (e) => {
		e.preventDefault();

		if (InputValue != "") Agregar();
	};

	return (
		<div>
			<form onSubmit={SubmitHandle} >
				<input
					type="text"
					className="form-control flex-2 w-80"
					onChange={ InputChange }
					value={ InputValue }
					placeholder="Escriba una categoria para agregar"
				></input>
			</form>
		</div>
	);
}

export default AddCategory;
