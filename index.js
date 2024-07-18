const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.use('/passaros', passaros);

app.route('/livro')
  .get((req, res) => {
    res.send('Retorna um livro aleatório');
  })
  .post((req, res) => {
    res.send('Adiciona um livro');
  })
  .put((req, res) => {
    res.send('Atualiza o livro');
  });

app.get('/ifalriolargo', (req, res) => {
  res.send('IFAL RIO LARGO');
});

app.post('salvar', (req, res) => {
  let nome = req.body.nome;
  let nota = req.body.nota;

  if (nota < 6){
    req.status(500).json({
      mensagem: 'Estudar MAIS'
    });
    // return;
  }

  console.log('BORAAA');
  let pessoa = {
    nome: nome,
    turma: '3º ano',
    instituto: 'IFAL-RL'
  }

  res.json(pessoa);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
