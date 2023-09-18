import { Router } from 'express'

import { login,register } from '../controller/authController'



export const authApp = Router()

authApp.post('/login', login)
authApp.post('/register', register)