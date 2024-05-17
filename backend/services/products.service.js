import PouchDB from 'pouchdb';

const db = new PouchDB('http://couchserver:5984/items', { 
  auto_compaction: true, 
  auth: { username: 'admin', password: 'admin' }
});

const ProductsService = {
  
  async getAllProducts() {
    try {
      const result = await db.allDocs({ include_docs: true, attachments: true });
      const products = result.rows.map(row => row.doc);
      return {products};
    } catch (error) {
      throw new Error('Error fetching all items');
    }
  },
  
  async createProduct(product) {
    try {
      const result = await db.post(product);
      return {result};
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

};

export default ProductsService;

function generarEnteroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createRandItem = async () => {
  let numeroRandom = generarEnteroRandom(0, 19);
  await ProductsService.createProduct(productos[numeroRandom]);
}

setTimeout(function(){setInterval(createRandItem, 5000);}, 5000);

let productos = [
  {
      name: 'huevos',
      price: 500,
      description: 'De campo'
  },
  {
      name: 'leche',
      price: 300,
      description: 'Entera'
  },
  {
      name: 'pan',
      price: 200,
      description: 'Integral'
  },
  {
      name: 'queso',
      price: 700,
      description: 'Gouda'
  },
  {
      name: 'manzanas',
      price: 600,
      description: 'Verde'
  },
  {
      name: 'arroz',
      price: 400,
      description: 'Blanco'
  },
  {
      name: 'fideos',
      price: 250,
      description: 'Spaghetti'
  },
  {
      name: 'pollo',
      price: 1000,
      description: 'Pechuga'
  },
  {
      name: 'aceite',
      price: 800,
      description: 'Oliva'
  },
  {
      name: 'azúcar',
      price: 150,
      description: 'Blanco'
  },
  {
      name: 'papas',
      price: 350,
      description: 'Russet'
  },
  {
      name: 'tomates',
      price: 450,
      description: 'Roma'
  },
  {
      name: 'agua',
      price: 50,
      description: 'Mineral'
  },
  {
      name: 'café',
      price: 1000,
      description: 'Tostado'
  },
  {
      name: 'maní',
      price: 600,
      description: 'Salado'
  },
  {
      name: 'yogur',
      price: 400,
      description: 'Natural'
  },
  {
      name: 'naranjas',
      price: 300,
      description: 'Valencia'
  },
  {
      name: 'zanahorias',
      price: 200,
      description: 'Naranja'
  },
  {
      name: 'cebollas',
      price: 250,
      description: 'Blanca'
  },
  {
      name: 'uvas',
      price: 700,
      description: 'Verdes'
  }
];
