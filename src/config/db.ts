import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {  
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL || '');
        console.log(colors.cyan.bold(`MongoDB conectado: ${db.connection.host}:${db.connection.port}`));
    } catch (error) {
        console.log(colors.red.bold(`Error al conectar a MongoDB`));
        process.exit(1);
    }
    }