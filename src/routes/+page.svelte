<script>
	import TodoForm from '../components/TodoForm.svelte';
	import Todo from '../components/Todo.svelte';
	import { todos } from '../stores/todoStores';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
	<TodoForm />
	<!-- similar to mapping, $ is used to get value from store -->
	{#each $todos as todo}
		<Todo {todo} index={todo.id} />
		<!-- <Todo todo = {todo} index={todo.id} />  these are props-->
	{/each}
</main>
