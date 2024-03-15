import { sql } from '@vercel/postgres';

const databaseUrl = process.env.DATABASE_BUILDER_URL;

export default async function saveSelections(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Método não permitido');
  }

  try {
    const { userId, selections } = req.body;
    await sql.begin(databaseUrl, async sql => {
      for (const selection of selections) {
        await sql`
          INSERT INTO selections (user_id, step, option, value)
          VALUES (${userId}, ${selection.step}, ${selection.option}, ${selection.value})
        `;
      }
    });
    res.status(200).json({ message: 'Seleções salvas com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}