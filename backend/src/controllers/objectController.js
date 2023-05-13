import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../utils/build-route-path.js'
import {Database} from '../database/database.js'


let date = new Date().toLocaleDateString();

const database = new Database();
export class ObjectController{

    getObject(){

        return {
            method: 'GET',
            path: buildRoutePath('/objects'),
            handler:(req, res) =>{
            const objects = database.select('objects')
            return res.end(JSON.stringify(objects))
            
        }
        }
    }

    postObject(){

        return {
            method: 'POST',
            path: buildRoutePath('/object'),
            handler: (req, res) => {
                const {objectType, description, state, photo, locate} = req.body
                const object = {
                    id:randomUUID(),
                    objectType,
                    description,
                    createdAt: date,
                    state,
                    photo
                }
                console.log(object)

                if(object.state === 'perdido'){
                    const lost = {
                    id:randomUUID(),
                    id_object:object.id,
                    id_user:1,
                    lost_locate:locate,
                }
                console.log(lost)

                database.insert('losts', lost)
                }else if(object.state === 'achado'){
                    const found = {
                        id: randomUUID(),
                        id_object:object.id,
                        id_user:1,
                        lost_locate:locate,
                    }
                    console.log(found)
                    database.insert('founds', found)
                }
                database.insert('objects', object)
                return res.writeHead(201).end()
            }
        }
    }

    updateObject(){
        return {
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
        }  
    }


    deleteObject(){
        return{
            method:'DELETE',
            path: buildRoutePath('/object/:id'),
            handler: (req, res)=>{
                const {id} = req.params
                database.delete('objects', id)
                return res.writeHead(204).end()
            }
        }
    }



}



