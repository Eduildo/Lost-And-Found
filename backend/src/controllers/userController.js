import {randomUUID} from 'node:crypto'
import {buildRoutePath} from '../utils/build-route-path.js'
import {Database} from '../database/database.js'


let date = new Date().toLocaleDateString();

const database = new Database();
export class UserController{

    getUser(){

        return {
            method: 'GET',
            path: buildRoutePath('/objects'),
            handler:(req, res) =>{
            const user = database.select('user')
            return res.end(JSON.stringify(user))
            
        }
        }
    }

    postUser(){

        return {
            method: 'POST',
            path: buildRoutePath('/user'),
            handler: (req, res) => {
                const {nome, email, telefone, photo} = req.body
                const user = {
                    id:randomUUID(),
                    nome,
                    email,
                    telefone,
                    createdAt: date,
                    photo
                }
                database.insert('users', user)
                return res.writeHead(201).end()
            }
        }
    }

    updateUser(){
        return {
            method: 'PUT',
            path: buildRoutePath('/user/:id'),
            handler: (req, res) =>{
                const {id} = req.params
                const {nome, email, telefone, photo} = req.body
                database.update('users', id, {
                    nome,
                    email,
                    telefone,
                    createdAt: date,
                    photo
                })
        
                return res.writeHead(201).end()
            }
        }  
    }


    deleteUser(){

        return{
            method:'DELETE',
            path: buildRoutePath('/user/:id'),
            handler: (req, res)=>{
                const {id} = req.params
                database.delete('users', id)
                return res.writeHead(204).end()
            }
        }
    }



}



