const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// List All Todo
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Detail Todo
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Create Todo
router.post('/', async (req, res) => {
    try {
        const { title } = req.body;
        const todo = await Todo.create({ title });
        res.status(201).json(todo); // 201 Created
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// DELETE a todo by ID
router.delete('/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findByPk(todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        await todo.update({ isDeleted: true });
        res.status(204).send(); // 204 No Content
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
