import {Database} from './database/database.js'
import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../src/utils/build-route-path.js'
import { ObjectController } from './controllers/objectController.js'


const objectController = new ObjectController()


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
                createdAt: Date.now(),
                state,
                photo
            }
            objectController.insert('objects', object)
            return res.writeHead(201).end()
        }

    }
]