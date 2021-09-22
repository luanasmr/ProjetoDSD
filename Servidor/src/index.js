const express = require('express');
const app = express();


//milldewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));


app.listen(3000);
console.log('Servidor na porta:', 3000);