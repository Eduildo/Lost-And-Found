import {buildRoutePath} from '../utils/build-route-path.js'
import {Database} from '../database/database.js'

const database = new Database();
export class FoundController{

    getFound(){

        return {
            method: 'GET',
            path: buildRoutePath('/founds'),
            handler:(req, res) =>{
            const found = database.select('found')
            return res.end(JSON.stringify(found))   
        }
        }
    }


}



