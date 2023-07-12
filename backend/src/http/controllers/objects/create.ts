import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const multer = require('fastify-multer');
const { promisify } = require('util');

const upload = multer({ dest: 'uploads/' }).single('photo');
const uploadPhoto = promisify(upload);

const prisma = new PrismaClient()
export async function create (request: FastifyRequest, reply:FastifyReply){

    const creatObjectBodySchema = z.object({
        type: z.string(),
        description: z.string(),
        dateLost: z.coerce.date(),
        status: z.string(),
        local_founds: z.string(),
    })


    try{

        await uploadPhoto(request, reply);
        
        const {type, description, dateLost, status, local_founds} = creatObjectBodySchema.parse(request.body);
    
        
        const object = await prisma.object.create({
           data:{
            type, 
            description, 
            dateLost, 
            status, 
            local_founds, 
            photo:request.file ? request.file.filename : null,
            user_id: request.user.sub,
           },
        })
    
        console.log(object)
    
    return reply.status(201).send()
    
    }catch(error) {
        console.error(error);
        return reply.status(400).send({ message: "Erro ao criar o objeto" });
    }

    
    
}