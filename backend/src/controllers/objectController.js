import {buildRoutePath} from '../utils/build-route-path.js'


     export function buildRoutePathHandler(){

        return {
            handler:(req, res) =>{
            const objects = objectController.select('objects')
            return res.end(JSON.stringify(objects))
            
        },
        
        
    }
}




