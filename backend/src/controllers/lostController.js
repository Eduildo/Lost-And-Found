import {buildRoutePath} from '../utils/build-route-path.js'
import {Database} from '../database/database.js'


const database = new Database();
export class LostController{

    getLost(){

        return {
            method: 'GET',
            path: buildRoutePath('/losts'),
            handler:(req, res) =>{
            const lost = database.select('lost')
            return res.end(JSON.stringify(lost))
            
        }
        }
    }

    postLost(){

        return {
            method: 'POST',
            path: buildRoutePath('/lost'),
            handler: (req, res) => {
                const {id_object, id_user, lost_locate} = req.body
                const lost = {
                    id_object,
                    id_user,
                    lost_locate,
                }
                database.insert('losts', lost)
                return res.writeHead(201).end()
            }
        }
    }

}



