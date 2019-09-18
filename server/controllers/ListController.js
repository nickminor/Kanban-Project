import ListService from "../services/ListService"
import express from 'express'
import { Authorize } from "../middleware/authorize.js"

let _ls = new ListService().repository

export default class ListController {

  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .post('', this.createList)
      .put('/:id', this.edit)
      .delete('/id', this.deleteList)
  }

  async getAll(req, res, next) {
    try {
      let data = await _ls.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }

  async createList(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _ls.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await _ls.findOneAndUpdate({ _id: req.params.id, user: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }
  async deleteList(req, res, next) {
    try {
      let data = await _ls.findOneAndRemove({ _id: req.params.id, user: req.session.uid })
      if (!data) {
        throw new Error('Invalid Id')
      }
      res.send('list deleted')
    } catch (error) { next(error) }
  }
}



