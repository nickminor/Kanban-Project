import TaskService from "../services/TaskService"
import express from 'express'
import { Authorize } from "../middleware/authorize.js"

let _cs = new CommentService().repository

export default class CommentController {

    constructor() {
        this.router = express.Router()
            .use(Authorize.authenticated)
            .get('', this.getAll)
            .post('', this.createComment)
            .put('/:id', this.edit)
            .delete('/:id', this.deleteComment)
    }
    async getAll(req, res, next) {
        try {
            let data = await _cs.find({})
            return res.send(data)
        } catch (error) { next(error) }
    }

    async createComment(req, res, next) {
        try {
            req.body.authorId = req.session.uid
            let data = await _cs.create(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            let data = await _cs.findOneAndUpdate({ _id: req.params.id, user: req.session.uid }, req.body, { new: true })
            if (data) {
                return res.send(data)
            }
            throw new Error("Invalid Id")
        } catch (error) { next(error) }
    }
    async deleteComment(req, res, next) {
        try {
            let data = await _cs.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
            if (!data) {
                throw new Error('Invalid Id')
            }
            res.send('task deleted')
        } catch (error) { next(error) }
    }
