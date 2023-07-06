import {FastifyInstance} from "fastify";
import { verifyJWT } from "../../middleware/verify-jwt";
import {requestObject} from "./create"


export async function RequestedRoutes(app:FastifyInstance){
    app.addHook("onRequest", verifyJWT);

    app.post("/request/:id",{onRequest: [verifyJWT] }, requestObject)
   
}
  