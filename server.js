const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(express.static('public'));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SPP-db',
  password: 'Daegu0903_',
  port: 5432,
});

app.get('/api/unit-kerja', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT "Unit_Kerja" AS unit_kerja
      FROM "STAMETBANG"."Daftar_Stamet";
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error mengambil data');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
