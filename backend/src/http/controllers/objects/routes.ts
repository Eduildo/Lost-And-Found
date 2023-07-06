import {FastifyInstance} from "fastify";
import { verifyJWT } from "../../middleware/verify-jwt";
import {create} from "./create"
import { search } from "./search";
import {objects} from "./get-all"
import { myObjects } from "./get-by-user";
import { deleteObject } from "./delete";
import { updateObject } from "./update";
import { objectsByStatus } from "./get-by-status";


export async function objectsRoutes(app:FastifyInstance){
    app.addHook("onRequest", verifyJWT);

    app.post("/objects", create)
    app.get("/objects/search", search) //Ainda não foi testado
    app.get("/objects/all",{onRequest: [verifyJWT] }, objects)
    app.get("/objects/:status",{onRequest: [verifyJWT] }, objectsByStatus)
    app.get("/objects/myObjects",{onRequest: [verifyJWT] }, myObjects)
    app.delete("/objects/myObjects/delete/:id",{onRequest: [verifyJWT] }, deleteObject)
    app.put("/objects/myObjects/update/:id",{onRequest: [verifyJWT] }, updateObject)

   
}
  