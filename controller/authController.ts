import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import User from '../models/User';

export const login = async( req:Request , res:Response ) => {

    const { email, password } = req.body;

    try {

        
    } catch (error) {
        
    }
}


export const register = async( req:Request, res:Response ) => {

    const { firstName, lastName, SSN, email, password} = req.body

    try {

        const bcryptPass = bcrypt.hashSync(password,10)

        const createUser = await User.create({
            firstName,
            lastName,
            SSN,
            email,
            password:bcryptPass
        })


        return res.json({
            createUser
        })

        
    } catch (error) {
        
        console.log(error)
        return res.json({
            msg:"Error while registering a user."
        })

    }

}
