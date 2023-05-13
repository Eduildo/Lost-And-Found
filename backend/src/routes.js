
import { ObjectController} from './controllers/objectController.js'
import { UserController} from './controllers/userController.js'
import {LostController} from './controllers/lostController.js'
import {FoundController } from './controllers/foundController.js'


const object = new ObjectController()
const user = new UserController()
const lost = new LostController()
const found = new FoundController()







export const routes = [
    //Object Routes
    object.getObject(),
    object.postObject(),
    object.updateObject(),
    object.deleteObject(),

    //users Routes
    user.getUser(),
    user.postUser(),
    user.updateUser(),
    user.deleteUser(),

    //lost Controller Routes
    lost.getLost(),

    //found controller Routes
    found.getFound(),
]