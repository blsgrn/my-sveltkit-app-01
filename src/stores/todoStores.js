import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const todos = writable([]);

//export function
export const addTodo = (text) => {
	todos.update((cur) => {
		const newTodos = [...cur, { text, completed: false, id: uuidv4() }];
		return newTodos;
	});
};
export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		//iterating through the list to find the index containing the unique id
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				//breaking from 'for loop' if found
				break;
			}
		}

		//toggling true/false if index is found
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
