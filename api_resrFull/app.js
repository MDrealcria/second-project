const express = require('express'); // faz a importação do projeto
const app = express(); // inicializa o projeto
const port = 4000; // Define a porta do servidor


// rota inicial do projeto
app.get('/', (req, res) => {
  res.send("Rota inicial do projeto"); // vai retornar uma mensagem que esta dentro das aspas
});

app.get("/bemvindo", (req, res) => {
  res.send("Bem vindo Desenvolvedor");
});



//codigo para efetuar o retorno json
app.get("/json", function (req, res) {
  return res.json({
    course: 'Node Js',
    title: 'desenvolvimento de API',
    description: 'Aprenda a desenvolver uma  API com Node Js',
    date: '2024-09-11'
  })
});

app.get("/curso", function (req, res) {
  let nome = req.query.nome;
  return res.json({ curso: `Aprendendo ${nome}` })
});

app.get("/turma/:id", function (req, res) {
  let id = req.params.id;
  return res.json({ turma: `Turma: ${id}` });
});


app.get("/contato/:id", function (req, res) {
  let id = req.params.id;
  let sit = req.params.sit;
  return res.json({
    id, sit, nome: 'Matheus',
     email: 'matheusmarcianodias@gmail.com'
  });
});

let cursos = ['Node JS', 'Javascript', 'React'];

app.get("/cursos/:index", function (req, res) {
  const {index} = req.params;
  return res.json(cursos[index]);
});


/// metodo Post
app.post('/cursos', (req, res) => {
  const {name} = req.body;
  cursos.push(name)
  // Retorno dos dados via json
  return res.json(cursos);
})

const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/produtos", function (req, res) {
  axios.get('http://localhost:4000/produtos.json')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).send('Erro ao ler arquivo')
    });
});


app.get("/produtos/:id", function (req, res) {
  axios.get('http://localhost:' + port + '/produtos.json')
    .then(response => {
      const listProduct = response.data.listProduct;
      const id = req.params.id;
      const product = listProduct.find(product => product.id == id);
      res.json(product);

    })

    .catch(error => {
      res.status(500).send('Erro ao ler arquivo')
    })
    });


    app.listen(port, () => { // inicia  o servidor
  console.log('Servidor iniciado na porta'); // mensagem de inicialização
});