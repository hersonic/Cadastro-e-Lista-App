import React from "react";
import { useState } from "react";

export default function TodoList () {

    const [value, setValue] = useState<String> ("");
    const [todos, setTodos] = useState <String[]>([]);
    return (
			<div>
				<h1>Lista de Tarefas</h1>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						setTodos([...todos, value]);
					}}
				>
					<input
						type="text"
						onChange={(event) => setValue(event.target.value)}
					/>
					<button>Adicionar</button>
				</form>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
						
					))}
				</ul>
			</div>
		);
        
};