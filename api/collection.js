const express = require('express');

const { Collection,TodoList } = require('../models/models');
const router = express.Router();
router.get('/',async (req,res) =>{
	let collection = await Collection.findAll({
		include:[
			{ 
				association: 'todoList',
				include: [
					{ association: 'todo' },
				]
			}
		]
	});
	res.status(200)
		.json({
			collection:collection
		});	
});
router.post('/', async (req, res) => {
	let collection = await Collection.create({
		id:req.body.id,
		type: req.body.type,
		userId:req.body.userId
		
	});
	res.status(200)
		.json({
			message: 'success entry of collection',
		});	
});
module.exports = router;
