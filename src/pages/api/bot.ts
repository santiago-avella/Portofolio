import type { APIContext } from "astro";
import { VectorStoreIndex } from "llamaindex";
import { Client } from "pg";
import * as dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { ai } from "@/config/connections";
dotenv.config();


export async function POST({ request }: APIContext) {
  try {
    const body = await request.json()
    const answer = body.answer

    if (answer == null){
      return new Response('message null')
    }


    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
    });
    await client.connect()
    const result = await client.query("SELECT text FROM data_cv")
    const document = result.rows.map((row) => row.text)
    const prompt = `context: ${document}, ${answer}`


    const response = await ai.models.generateContent({
       model: "gemini-2.5-flash",
       contents: prompt
    })
    return new Response(JSON.stringify({reply: response.text}))

  } catch (error) {
    console.error('Error procesando PDF:', error);
    const errorMessage = (error instanceof Error) ? error.message : String(error);
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}