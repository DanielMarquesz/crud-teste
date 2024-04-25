const express = require('express')
const bodyParser = require('body-parser');

const pessoasCadastradas = [
  {
    id: 1,
    name: 'Daniel Marques',
    idade: 28,
    sexo: 'M'
  },
  {
    id: 2,
    name: 'Otavio Lima',
    idade: 26,
    sexo: 'M'
  },
]

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



app.get('/pessoas', function (req, res) {
  console.log('GET - pessoas')
  return res.json(pessoasCadastradas)

})

app.get('/pessoas/:id', function (req, res) {

  const id = Number(req.params.id)

  const pessoaEncontrada = pessoasCadastradas.filter((pessoa) => pessoa.id === id)

  console.log('GET - pessoas pelo id')
  return res.json(pessoaEncontrada)

})

app.post('/cadastro', function (req, res) {

  const body = req.body

  console.log('POST - Cadastro pessoas')
  pessoasCadastradas.push(body)

  return res.json(body)

})

app.listen(3000, () => {
  console.log("Servidor iniciou! YUHUHUU")
})