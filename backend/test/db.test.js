// test/db.test.js
const mysql = require('mysql2');
const db = require('../database');

describe('Teste de conexão com o db', () => {
  it('Tem que conectar ao banco de dados sem erros', (done) => {
    db.connect((err) => {
      expect(err).toBeNull();
      console.log('Conexão bem-sucedida!');
      done();
    });
  });
});
