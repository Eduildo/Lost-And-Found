const express = require('express');


const app = express();

//Ler JSON / middleware

app.use(
express.urlencoded({
    extended: true,
}),
);


app.use(express.json());

//Rota Inicial
app.get('/', (req, res) => {
    
})


//Porta utilizada
app.listen(3333);