import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../src/utils/build-route-path.js'
import {Database} from './database/database.js'
import { ObjectController} from './controllers/objectController.js'


const object = new ObjectController()

const database = new Database()





export const routes = [
    object.getObject(),
    object.postObject(),
    object.updateObject(),
    object.deleteObject(),

]