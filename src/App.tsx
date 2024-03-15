import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Home from "./Componentes/Pages/Home";
import Formulario from "./Componentes/Pages/Formulario";
import ToDoList from "./Componentes/Pages/ToDoList";
import Global from "./Styles/global";
import NavBar from "./Componentes/Pages/NavBar";
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<Global />
						<NavBar />
					</nav>
				</div>
				<Routes>
					<Route
						path="/"
						Component={Home}
					/>
					<Route
						path="/Formulario"
						Component={Formulario}
					/>
					<Route
						path="/TodoDoList"
						Component={ToDoList}
					/>
				</Routes>
			</Router>
		);
	}
}

render(<App />, document.getElementById("root"));
