import fastify from "fastify";
import {ZodError} from "zod";
import { appRoutes } from "./http/routes";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";




export const app = fastify();

app.register(fastifyJwt, {secret:env.JWT_SECRET,})

app.register(appRoutes);



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

