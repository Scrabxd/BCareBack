import Express, { Application } from "express";
import dotenv from 'dotenv'
dotenv.config()

import db from '../db/db'
import { authApp } from "../routes/auth";


export class Server {

    private app: Application

    private port: string

    private apiPath = {
        auth: '/auth',
        contract: '/contract'
    }


    constructor(){
        this.app = Express()

        this.port = process.env.PORT

        this.dbConn()

        this.middlewares()
        
        this.routes()

    }

    async dbConn(){
        try {
            await db.authenticate()
        } catch (error) {
            console.log(error)
        }
    }

    routes(){
        this.app.use(this.apiPath.auth, authApp)
    }

    middlewares(){

    }



    listen(){
        this.app.listen(this.port, ( )=> console.log(`RUNNING ON PORT ${this.port}`))
    }


}