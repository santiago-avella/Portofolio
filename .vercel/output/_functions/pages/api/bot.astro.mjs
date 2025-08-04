import 'llamaindex';
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
export { renderers } from '../../renderers.mjs';

dotenv.config();
({
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  user: process.env.USER,
  table_name: process.env.TABLE_NAME,
  embed_dim: process.env.EMBED_DIM
});
const ai = new GoogleGenAI({});

dotenv.config();
async function POST({ request }) {
  try {
    const body = await request.json();
    const answer = body.answer;
    if (answer == null) {
      return new Response("message null");
    }
    const client = new Client({
      connectionString: process.env.POSTGRES_URL
    });
    await client.connect();
    const result = await client.query("SELECT text FROM data_cv");
    const document = result.rows.map((row) => row.text);
    const prompt = `context: ${document}, ${answer}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });
    return new Response(JSON.stringify({ reply: response.text }));
  } catch (error) {
    console.error("Error procesando PDF:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
