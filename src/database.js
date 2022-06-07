import mongoose from 'mongoose';

(async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/test');
        console.log("Conectado con exito a la base de datos: ", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();

