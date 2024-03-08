
import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";

export default function NavBar() {
	return (
		<Container>
			<Nav id="sidebar">
				<Link
					to="/"
					className="active"
				>
					{"Home"}
				</Link>
				<Link
					to="/Formulario"
					className="active"
				>
					{"Formulario"}
				</Link>
				<Link
					to="/TodoDoList"
					className="active"
				>
					{"Lista"}
				</Link>
			</Nav>
		</Container>
	);
}
