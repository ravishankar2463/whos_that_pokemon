import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PokeClient from "./PokeClient";
import Game from "./Game";
import "./styles.css";

function Main() {
	const [pokemonData, setPokemonData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const pokeClient = new PokeClient();

	useEffect(() => {
		pokeClient.getPokemons(151).then((res) => {
			setPokemonData(res.results);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <h1>Data is Loading....</h1>;
	}

	return (
		<>
			<header>
				<nav className="nav py-5 flex align-center font-extrabold">
					<a
						className="ml-2 p-1 bg-white border border-gray-500 rounded-l"
						href="#"
					>
						Pokemon
					</a>
				</nav>
			</header>
			<Game pokemonData={pokemonData} />
		</>
	);
}

export default Main;
