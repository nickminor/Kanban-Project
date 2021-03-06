import BoardService from '../services/BoardService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import ListService from '../services/ListService'
import TaskService from '../services/TaskService'
import CommentService from '../services/CommentService'


let _boardService = new BoardService().repository
let _listService = new ListService().repository
let _taskService = new TaskService().repository
let _commentService = new CommentService().repository

//PUBLIC
export default class BoardsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:boardId/lists', this.getAllLists)
      .get('/:boardId/lists/:listId/tasks', this.getTasks)
      .get('/:boardId/lists/:listId/tasks/:taskId/comments', this.getComments)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await _boardService.find({ authorId: req.session.uid })
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getAllLists(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await _listService.find({ boardId: req.params.boardId })
      return res.send(data)
    }
    catch (err) { next(err) }
  }
  async getTasks(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await _taskService.find({ listId: req.params.listId })
      return res.send(data)
    }
    catch (err) { next(err) }
  }
  async getComments(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await _commentService.find({ taskId: req.params.taskId })
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await _boardService.findOne({ _id: req.params.id, authorId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _boardService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _boardService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _boardService.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


