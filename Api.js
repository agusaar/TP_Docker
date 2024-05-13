const express = require('express');
const service = require('./servicio');
const bodyParser = require("body-parser");
const api = express();
api.use(express.json());
const cors = require("cors");

api.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5500'
}));

api.get("/",service.getAll);
api.post("/addProduct",bodyParser.json(),service.create);

api.listen(3100, ()=>{
    console.log('Api levantado en el puerto 3100');
});