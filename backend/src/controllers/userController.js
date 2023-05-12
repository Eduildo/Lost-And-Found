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
                const {objectType, description, state, photo} = req.body
                const object = {
                    id:randomUUID(),
                    objectType,
                    description,
                    createdAt: date,
                    state,
                    photo
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



