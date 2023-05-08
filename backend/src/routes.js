import {Database} from '../src/database'
import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../src/utils/build-route-path'


const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/objects'),
        handler: (req, res) =>{
            const objects = database.select('objects')
            return res.end(JSON.stringify(objects))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/objects'),
        handler: (req, res) => {
            const {objectName, } = req.body
            const object = {
                id:randomUUID(),
                objectName,   
            }
            database.insert('objects', object)
        }

    }
]