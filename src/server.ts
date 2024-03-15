import express from "express";
const app = express();

const PORT = 8000;

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

const todos = [
  { id: 1, title: "coding" },
  { id: 2, title: "cleaning" },
];

app.get("/welcomemsg", (req, res) => {
  res.status(200).send("Welcome Tulsi");
});

// POST Request which console of User added
app.post("/welcomemsg", (req, res) => {
  const { username } = req.body;
  res.status(201).send(`User Created ${username} `);
});

app.delete("/welcomemsg/:id", (req, res) => {
  const { id } = req.params;
  // remove it from the array
  res.status(204).send(`User Deleted Successfully`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});