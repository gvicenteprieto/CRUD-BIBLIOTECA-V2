import pkg from 'mongoose';
const {Schema, model} = pkg;

const UserSchema = new Schema (
    {
        username: { type: String, 
            required: true, 
            trim: true, 
            unique: true 
        },
        email: { type: String, 
            required: true, 
            trim: true, 
            unique: true 
        },
        password: {
            type: String,
            required: true, 
            trim: true, 
            unique: true
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        //para quitar el _id
        versionKey: false,
    }
);

//definimos un esquema de datos para poder guardar en la base de datos
export default model("User", UserSchema);