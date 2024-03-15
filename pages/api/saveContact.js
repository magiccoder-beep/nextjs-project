import { sql } from '@vercel/postgres';

const databaseUrl = process.env.DATABASE_BUILDER_URL;

export default async function saveContact(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Método não permitido');
  }

  try {
    const { name, email, phone } = req.body;
    const result = await sql(databaseUrl)`
      INSERT INTO users (name, email, phone) VALUES (${name}, ${email}, ${phone}) RETURNING id
    `;
    res.status(200).json({ id: result[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}