import pkg from 'mongoose';
const {Schema, model} = pkg;

const BookSchema = new Schema (
    {
        title: { type: String, 
            required: true, 
            trim: true, 
            unique: true 
        },
        author: { type: String, 
            required: true, 
            trim: true, 
        },
        description: {
            type: String,
            trim: true,
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
export default model("Book", BookSchema);