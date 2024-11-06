const express = require('express');
const db = require('./database');
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());


app.get('/api/usuario/buscar/:valorBusca', (req, res) => {
  const { valorBusca } = req.params;

  const queryUsuario = `
      SELECT * FROM usuario 
      WHERE nome = ? OR usuario = ?
  `;

  db.query(queryUsuario, [valorBusca, valorBusca], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (rows.length > 0) {
          const usuario = rows[0];

          const queryRepositorio = `
              SELECT * FROM repositorio 
              WHERE idusuario = ?
          `;

          db.query(queryRepositorio, [usuario.codigousuario], (err, repositorios) => {
              if (err) {
                  return res.status(500).json({ error: err.message });
              }
              res.json({ usuario, repositorios });
          });
      } else {
          res.status(404).json({ message: 'Usuário não encontrado' });
      }
  });
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
