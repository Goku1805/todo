const express = require('express');

const { TodoList, Todo } = require('../models/models');
const router = express.Router();
router.get('/',async (req,res) =>{
	let todoList = await TodoList.findAll({
		include:[{
			model: Todo ,
			as:"todo"
			}]
	});
	res.status(200)
		.json({
			todoList:todoList
		});	
});
router.post('/', async (req, res) => {
	let todoList = await TodoList.create({
		id:req.body.id,
		day: req.body.day,
		collectionId:req.body.collectionId
		
	});
	res.status(200)
		.json({
			message: 'success entry of TodoList',
		});	
});
module.exports = router;
