const express = require('express');
const db = require('./database');
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rota pra buscar um usuário pelo nome
app.get('/api/usuario/nome/:nome', (req, res) => {
  const { nome } = req.params;
  const query = `SELECT * FROM usuario WHERE nome = ?`;

  db.query(query, [nome], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
