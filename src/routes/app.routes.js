import Router from "express";
import { probando } from "../controllers/app.controllers.js";




const router = Router()


router.get('/prueba', probando)


export default router