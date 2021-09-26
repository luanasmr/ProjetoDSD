const express = require('express');
const app = express();
const cors = require('cors');



//milldewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next)=>{
    res.header("Access-control-Allow-Origin", "*")
    app.use(cors());
    next();

});

//routes
app.use(require('./routes/index'));


app.listen(4000);
console.log('Servidor na porta:', 4000);


