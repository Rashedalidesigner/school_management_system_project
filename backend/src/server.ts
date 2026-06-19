import app from "./app";
import { connectToDatabase } from "./database";

const server = () => {
    connectToDatabase();
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}

server();