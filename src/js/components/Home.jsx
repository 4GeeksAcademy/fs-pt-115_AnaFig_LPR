import React from "react";

//include images into your bundle
import PutoNavbar from "./PutoNavbar";
import PutoJumbotron from "./PutoJumbotron";
import LasCartas from "./LasCartas";

//create your first component
const Home = () => {
	//Aqui puro JS
	const cartas = [
		{
			img: "https://definicion.de/wp-content/uploads/2010/06/infierno-1.jpg",
			Título: "Infierno 1",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis tenetur harum incidunt maxime nisi iusto neque quas ipsa. Debitis illum eveniet culpa porro quas, facere corrupti maiores aut eum."
		},
		{
			img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8d77/live/044935c0-ad5b-11ee-a531-770b15b5020a.jpg.webp",
			Título: "Infierno 2",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis tenetur harum incidunt maxime nisi iusto neque quas ipsa. Debitis illum eveniet culpa porro quas, facere corrupti maiores aut eum."

		},
		{
			img: "https://static.wikia.nocookie.net/pure-evil-wiki/images/1/1d/Satan.jpg/revision/latest?cb=20200813135951",
			Título: "Infierno 3",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis tenetur harum incidunt maxime nisi iusto neque quas ipsa. Debitis illum eveniet culpa porro quas, facere corrupti maiores aut eum."

		},
		{
			img: "https://img.eldefinido.cl/portadas/650/2019-06-07-1108NWZ4453.jpg",
			Título: "Infierno 4",
			texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis tenetur harum incidunt maxime nisi iusto neque quas ipsa. Debitis illum eveniet culpa porro quas, facere corrupti maiores aut eum."

		},
	]
	return ( //Aqui podemos usar html y js
		<div>
			<PutoNavbar />
			<PutoJumbotron />
			<div className="d-flex justify-content-around">
				{cartas.map((cartas) => (
					<LasCartas cartas={cartas} />
				))}
			</div>
			{/* También se puede poner directamente footer y no div */}
			<div className="col-12 bg-dark text-white d-flex justify-content-center fs-5 mt-3 py-2" >
				Copyright © Your Website 2025.
			</div>
		</div>
	);
};

export default Home;