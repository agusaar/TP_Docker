import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cors from 'cors';

// Cosas raras de Node.js para obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import ProductsService from './services/products.service.js';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());

const PORT = 3000;

app.get('/items', async (req, res) => {
  try {
    const products = await ProductsService.getAllProducts();
    res.json(products);
  } catch (error) {
    //console.log("Error: ",error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/items', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    let product = {
      name,
      price,
      description
    };
    const result = await ProductsService.createProduct(product);
    res.json(result);
  } catch (error) {
    //console.log("Error: ",error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
