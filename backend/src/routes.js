import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../src/utils/build-route-path.js'
import { ObjectController } from './controllers/objectController.js'


const objectController = new ObjectController();

let date = new Date().toLocaleDateString();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/objects'),
        handler: (req, res) =>{
            const objects = objectController.select('objects')
            return res.end(JSON.stringify(objects))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/object'),
        handler: (req, res) => {
            const {objectType, description, state, photo} = req.body
            console.log(req.body)
            const object = {
                id:randomUUID(),
                objectType,
                description,
                createdAt: date,
                state,
                photo
            }
            objectController.insert('objects', object)
            return res.writeHead(201).end()
        }

    },
    {
        method: 'PUT',
        path: buildRoutePath('/object/:id'),
        handler: (req, res) =>{
            const {id} = req.params
            const {objectType, description, state, photo} = req.body
            database.update('objects', id, {
                objectType, 
                description, 
                state, 
                photo
            })
    
            return res.writeHead(201).end()
        }
    },
    {
        method:'DELETE',
        path: buildRoutePath('/object/:id'),
        handler: (req, res)=>{
            const {id} = req.params
            database.delete('objects', id)
            return res.writeHead(204).end()
        }
    }


]