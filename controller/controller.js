const express = require("express")
const app = express.Router()
app.use(express.json())
const Service = require("../service/service")

app.get("/usuario/:id", (req, res) => {
    const id = req.params.id
    try {
      const respostaService = service.getUsuarioById(id)
      res.status(200).json(respostaService)
    } catch(erro) { 
      res.status(404).json({erro: erro.message})
    }
  })
  
  app.post("/usuario", (req, res) => {
    try{
      const corpoRequisicao = req.body
      const respostaService = service.addUsuario(corpoRequisicao)
      res.status(201).json({resposta: respostaService})
    } catch(erro) {
      res.status(400).json({erro: erro.message})
    }
  })
  
  app.put("/usuario/:id", (req, res) => {
    try{
      let id = req.params.id
      let corpoRequisicao = req.body
      const respostaService = service.editarUsuario(id, corpoRequisicao)
      res.status(200).json({msg: respostaService})
    } catch(erro) {
      res.status(400).json({erro: erro.message})
    }
  })
  
  app.delete("/usuario/:id", (req, res) => {
    try{
      let id = req.params.id
      const respostaService = service.deletarUsuario(id)
      res.status(200).json({msg: respostaService})
    } catch(erro) {
      res.status(400).json({erro: erro.message})
    }
  })


module.exports = app