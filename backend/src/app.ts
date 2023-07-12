import fastify from "fastify";
import {ZodError} from "zod";

import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import { usersRoutes } from "./http/controllers/users/routes";
import { objectsRoutes } from "./http/controllers/objects/routes";
import { RequestedRoutes } from "./http/controllers/requested/routes";
const multer = require('fastify-multer');




export const app = fastify();
const upload = multer({ dest: 'uploads/' });

app.register(fastifyJwt, {secret:env.JWT_SECRET,})
app.register(upload.contentParser);

app.register(usersRoutes);
app.register(objectsRoutes);
app.register(RequestedRoutes);



app.setErrorHandler((error, _, reply) =>{
    if(error instanceof ZodError){
        return reply.status(400).send({message: "Validation error.", issue: error.format()})
    }

    if(env.NODE_ENV !== "production"){
        console.error(error)
    }else{
        /*I think we can implement this part adding 
        an external tool to see the error in production*/
    }

    return reply.status(500).send({message:"Internal server error."});
})

