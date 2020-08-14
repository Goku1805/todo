const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
 id: {
 	type: Sequelize.INTEGER,
 	primaryKey:true,
 	autoIncrement: true,
 },
 name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Collection = sequelize.define('collection', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false,
	}
});

const TodoList = sequelize.define('todoList', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	day: {
		type: Sequelize.STRING,
		allowNull: false,
	}
});

const Todo = sequelize.define('todo', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	}
});

User.hasMany(Collection,{
	as:"collection"
});
Collection.hasMany(TodoList,{
	as:"todoList"
});
TodoList.hasMany(Todo,{
	as:"todo"
});


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database is connected');
});
module.exports = { 
	sequelize, User, Collection, TodoList, Todo
};