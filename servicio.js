/*import PouchDB from 'pouchdb-browser';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

const db = new PouchDB('http://localhost:5984/items', { 
  auto_compaction: true, 
  auth: { username: 'admin', password: 'admin' } 
});*/
var productos = []

const servicioProductos = {
  getAll:  async (req,res) =>{
    try {
      // TODO: Completar esto
      res.send(JSON.stringify(productos));
    } catch (error) {
      throw new Error('Error fetching all items');
    }
  },

  /*async getAllWithFilters({ yearMin, yearMax, title}) {
    try {
      // TODO: Completar esto
      return [];
    } catch (e) {
      console.log(e)
    }
  },

  async get(id) {
    try {
      // return await db.get('mydoc');
      return null;
    } catch (error) {
      throw new Error(`Error fetching item with id ${id}`);
    }
  },*/

  create: async (req,res) =>{
    try {
      /* db.post({
          title: 'Ziggy Stardust'
        }).then(function (response) {
          // handle response
        }).catch(function (err) {
          console.log(err);
        })*/
        var producto = {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description
        };
        productos.push(producto)
        res.send('ok');
    } catch (error) {
      throw new Error('Error creating item');
    }
  },

  /*async update(id, data) {
    try {
      
      try {
        var doc = await db.get('mydoc');
        var response = await db.put({
          _id: 'mydoc',
          _rev: doc._rev,
          title: "Let's Dance"
        });
      } catch (err) {
        console.log(err);
      }
      return null;
    } catch (error) {
      throw new Error(`Error updating item with id ${id}`);
    }
  },

  async delete(id) {
    try {
      // TODO: Completar esto
      return null;
    } catch (error) {
      throw new Error(`Error deleting item with id ${id}`);
    }
  },*/

};

const obtenerBody = (req) => {
  return new Promise((resolve, reject) => {
      let body = '';
      req.on('data', chunk => {
          body += chunk.toString();
      })

      req.on('end', () => {
          resolve(body);
      })
  })
}

module.exports = servicioProductos;