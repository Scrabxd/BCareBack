import { Router } from 'express'

import { login } from '../controller/authController'


export const authApp = Router()

authApp.post('/login', login)