import mongoose, { connection } from "mongoose";

type ConnectionObject={
    isConnected?:Number
}

const connection:ConnectionObject={

}

async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to the database");
        return;
    }
    try{
        await
    }
    
}
