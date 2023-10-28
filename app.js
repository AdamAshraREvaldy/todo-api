const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

// Import rute API
const todoRoutes = require('./routes/todo');

app.use('/todos', todoRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
