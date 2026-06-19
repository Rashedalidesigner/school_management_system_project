import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), "src/.env"),
});


export const config = {
    PORT: process.env.PORT || 8000,
    DB_PORT: process.env.DB_PORT || 5432 as number,
    DB_USER: process.env.DB_USER as string,
    DB_HOST: process.env.DB_HOST as string,
    DB_NAME: process.env.DB_NAME as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME as string
}

console.log(path.join(process.cwd(), ".env"));