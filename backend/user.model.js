import {model , SchemaTypes , Schema} from 'mongoose'

const userSchema = new Schema({
    name : {
        type : SchemaTypes.String,
        minLength : 3,
        required : true
    },
    email : {
        type : SchemaTypes.String,
        required : true,
        unique : true 
    },
    password : {
        type : SchemaTypes.String,
        required : true ,
        minLength : 6
    }
})

const User = model("User" , userSchema);
export default User;