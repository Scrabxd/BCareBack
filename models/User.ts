import db from '../db/db'

import {TEXT,INTEGER} from 'sequelize'

const User = db.define('User',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:TEXT
    },
    lastName:{
        type:TEXT
    },
    SSN:{
        type:TEXT
    },
    email:{
        type:TEXT
    },
    password:{
        type:TEXT
    }
},
{
    freezeTableName:true
})

export default User;