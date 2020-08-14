const express = require('express');

const { Todo } = require('../models/models');
const router = express.Router();
/*router.get('/',async (req,res) =>{
	let collection = await Collection.findAll();
	res.status(200)
		.json({
			user: user,
		});	
});*/
router.post('/', async (req, res) => {
	let todo = await Todo.create({
		id:req.body.id,
		body: req.body.body,
		todoListId:req.body.todoListId
		
	});
	res.status(200)
		.json({
			message: 'success entry of Todo',
		});	
});
module.exports = router;