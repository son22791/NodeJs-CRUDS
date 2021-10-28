var express = require('express');
var router = express.Router();
var todoList = require('../controller/todoController')

router.route("/").get(todoList.getTask).post(todoList.addTask)
router.route("/:id").delete(todoList.deleteTask).put(todoList.updateTask)
router.route("/pagination").get(todoList.paginateTask)
router.route("/search").get(todoList.searchTask)
router.route("/searchId/:id").get(todoList.searchIdTask)

module.exports = router 