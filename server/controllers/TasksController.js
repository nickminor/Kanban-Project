import TaskService from "../services/TaskService"
import express from 'express'
import { Authorize } from "../middleware/authorize.js"

let _ts = new TaskService().repository

export default class TaskController {

    constructor() {
        this.router = express.Router()
            .use(Authorize.authenticated)
            .get('', this.getAll)
            .post('', this.createTask)
            .put('/:id', this.moveTask)
            .delete('/:id', this.deleteTask)
    }
    async getAll(req, res, next) {
        try {
            let data = await _ts.find({})
            return res.send(data)
        } catch (error) { next(error) }
    }

    async createTask(req, res, next) {
        try {
            req.body.authorId = req.session.uid
            let data = await _ts.create(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async moveTask(req, res, next) {
        try {
            let data = await _ts.put({ _id: req.params.id, user: req.session.uid }, req.body, { new: true })
            if (data) {
                return res.send(data)
            }
            throw new Error("Invalid Id")
        } catch (error) { next(error) }
    }
    async deleteTask(req, res, next) {
        try {
            let data = await _ts.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
            if (!data) {
                throw new Error('Invalid Id')
            }
            res.send('task deleted')
        } catch (error) { next(error) }
    }






















}