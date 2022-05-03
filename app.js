const express = require('express');
const {randomUUID} = require("crypto");
const { response } = require('express');

const app = express();

app.use(express.json());

const products = [];

/**
 * POST -> Inserir um dado
 * GET -> Busar um/mais dados
 * PUT -> Alterar um dado
 * DELETE -> Remover um dado
 */

/**
 * Body => Sempre que eu quiser nviar dados para minha aplicação
 * Params => /Product/234233233
 * Query => /product?id=121233556768493
 */

app.post("/products", (req, res) => {
    // Nome e preço
    const {name, price } = req.body;

    const product = {
        name,
        price,
        id: randomUUID()
    };

    products.push(product);

    return res.json(product);
});

app.get("/products", (req, res) => {
    return res.json(products);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    return res.json(product);
});

app.listen(4002, () => console.log('Servidor rodando na porta 4002.'));