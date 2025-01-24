// client/src/components/TodoList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos', error);
        }
    };

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/todos', { text: newTodo });
            setTodos([...todos, response.data]);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo', error);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
