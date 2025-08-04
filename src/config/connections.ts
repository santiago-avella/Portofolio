import { GoogleGenAI } from "@google/genai"
import { HuggingFaceEmbedding } from "llamaindex"
import * as dotenv from "dotenv";
dotenv.config();

export const url = {
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    user: process.env.USER,
    table_name: process.env.TABLE_NAME,
    embed_dim: process.env.EMBED_DIM,
}
export const ai = new GoogleGenAI({})


