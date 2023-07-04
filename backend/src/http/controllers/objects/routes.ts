import {FastifyInstance} from "fastify";
import { verifyJWT } from "../../middleware/verify-jwt";
import {create} from "./create"
import { search } from "./search";

export async function objectsRoutes(app:FastifyInstance){
    app.addHook("onRequest", verifyJWT);

    app.post("/objects", create)
    app.get("/objects/search", search)
}
  