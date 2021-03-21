const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');


const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/productos',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(() => console.log('Conectado a base de datos de productos'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.listen(5000,()=>{
    console.log('App listening in port => 5000')
})

app.use('/',routes())


app.get('/',(req,res)=>{
    res.send('Ya casi semana santa, vamos a la playa!!! :-)');
})
