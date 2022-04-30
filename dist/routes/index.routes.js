"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _taskControllers = require("../controllers/taskControllers");

var router = (0, _express.Router)();
router.get('/', _taskControllers.viewTasks);
router.post('/tasks/add', _taskControllers.createTask);
router.get('/task/:id/edit', _taskControllers.updateTask);
router.post('/task/:id/edit', _taskControllers.postUpdatedTask);
router.get('/delete/:id', _taskControllers.deleteTask);
router.get('/toggleDone/:id', _taskControllers.taskIsDone);
var _default = router;
exports["default"] = _default;