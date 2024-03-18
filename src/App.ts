import express from "express";
const App = express();
App.use(express.json());

const PORT = 8000;

// MIDDLEWARE
App.use(express.json({ limit: "10kb" }));

const todos = [
  { id: 1, title: "coding" },
  { id: 2, title: "cleaning" },
];

// GET Request
App.get("/todos", (req, res) => {
  res.status(200).send(todos);
});

// POST /todos
App.post('/todos', (req, res) => {
  const { title } = req.body;

  // Create a new todo object
  const newTodo = {
    id: todos.length + 1,
    title: title
  };

  // Add the new todo to the todos array
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// DELETE /todos/:id
App.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the index of the todo with the given id
  const index = todos.findIndex(todo => todo.id === id);

  // Check if the todo with the given id exists
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // Remove the todo from the todos array
  todos.splice(index, 1);

  res.json({ message: "Todo deleted successfully" });
});

// GET /todos/:id
App.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the todo with the given id
  const todo = todos.find(todo => todo.id === id);

  // Check if the todo with the given id exists
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

// PUT /todos/:id
App.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  // Find the index of the todo with the given id
  const index = todos.findIndex(todo => todo.id === id);

  // Check if the todo with the given id exists
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
});