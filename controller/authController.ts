import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import User from '../models/User';

export const login = async( req:Request , res:Response ) => {

    const { email, userPassword } = req.body;

    try {

        const getUser = await User.findOne({
            where: {
                email
            }
        });


        if (getUser){

            const {password} = getUser;

            const comPassword = bcrypt.compareSync(userPassword, password);
            
            if (comPassword){
                delete getUser.dataValues.password;
                return res.json({
                    getUser
                });
            }

            return res.json({
                msg: "Invalid combination of user and password"
            })
        }

        return res.json({
            msg: "User not found"
        })

        
    } catch (error) {
        
        console.log(error)
        return res.json({
            msg:"Error while loggin."
        })
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
