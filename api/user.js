const express = require('express');

const { User,Collection,TodoList,Todo } = require('../models/models');
const router = express.Router();
router.get('/',async (req,res) =>{
	let user = await User.findAll({	
		include:[
			{
				association:"collection",
				include:[
				{ 
					association: "todoList",
					include:[
						{ association: "todo" }] 
				}]
			}]
	});
	res.status(200)
		.json({
			user: user,
		});	
});
router.post('/', async (req, res) => {
	let user = await User.create({
		id:req.body.id,
		name: req.body.name,

		
	});
	res.status(200)
		.json({
			message: 'success entry of user',
		});	
});
module.exports = router;

